<script>
import gql from 'graphql-tag'
import Info from './info.vue'

export default {
  name: 'single-project',
  components: { Info },
  apollo: {
    repository: {
      query: gql`query repositoryInfo($id: ID!) {
                repository: node(id: $id) {
                  id
                  ...repoData
                }
              }

              fragment repoData on Repository {
                name
                url
                homepageUrl
                description
                createdAt
                primaryLanguage {
                  name
                }
                stargazers(first: 0) {
                  totalCount
                }
                owner {
                  login
                  url
                  avatarUrl
                }
              }`,
      variables () {
        return {
          id: this.id
        }
      }
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  watch: {
    repository () {
      this.$title = `Project: ${this.repository.name}`
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="$apollo.loading" class="has-text-centered">
      <span class="icon">
        <i class="fas fa-spinner fa-pulse fa-3x"></i>
      </span>
    </div>
    <Info v-else :project="repository" />
  </div>
</template>
