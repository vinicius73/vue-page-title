<script>
import gql from 'graphql-tag'
import get from 'lodash/get'

export default {
  name: 'user-projects',
  apollo: {
    user: {
      query: gql`query userRepositories {
                user(login: "vinicius73") {
                  id
                  repositories(first: 18, orderBy: {field: STARGAZERS, direction: DESC}) {
                    nodes {
                      id
                      name
                      description
                      url
                      homepageUrl
                      stargazers(first: 0) {
                        totalCount
                      }
                    }
                  }
                }
              }`
    }
  },
  computed: {
    projects () {
      return get(this.user, ['repositories', 'nodes'], [])
    }
  }
}
</script>

<template>
  <div>
    <div v-if="$apollo.loading" class="has-text-centered">
      <span class="icon">
        <i class="fas fa-spinner fa-pulse fa-3x"></i>
      </span>
    </div>
    <ul v-else>
      <li v-for="row in projects">
        <div class="buttons has-addons">
          <router-link :to="{ name: 'project', params: {id: row.id} }" class="button is-dark">
            {{ row.name }}
          </router-link>
          <a class="button is-black" v-if="row.homepageUrl" :href="row.homepageUrl" target="_blank">
            <span class="icon">
              <i class="fa fa-home"></i>
            </span>
          </a>
          <a class="button is-info" :href="row.url" target="_blank">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul li {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
  }
</style>
