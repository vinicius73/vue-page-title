<script>
export default {
  name: 'project-info',
  props: {
    project: Object
  }
}
</script>

<template>
  <div class="box">
    <h3 class="title">
      <router-link :to="{ name: 'about' }" class="button is-info" title="back">
        <span class="icon">
          <i class="fa fa-arrow-left"></i>
        </span>
      </router-link>
      <a class="button is-outlined" v-if="project.homepageUrl" :href="project.homepageUrl" target="_blank">
        <span class="icon">
          <i class="fa fa-home"></i>
        </span>
      </a>
      <a class="button is-outlined" :href="project.url" target="_blank">
        <span class="icon">
          <i class="fab fa-github"></i>
        </span>
      </a>

      <a :href="project.owner.url" target="_blank" class="button is-outlined">
        <img :src="project.owner.avatarUrl" class="image is-inline is-16x16" >
        {{ project.owner.login }}
      </a>

      {{ project.name }}

      <span class="tag is-warning stargazers">
        {{ project.stargazers.totalCount }}
        <span class="icon">
          <i class="fas fa-star"></i>
        </span>
      </span>
    </h3>
    <h4 class="subtitle">{{ project.description }}</h4>
    <table class="table is-striped is-hoverable is-fullwidth">
      <tbody>
        <tr>
          <th>Github</th>
          <td>
            <a :href="project.url">{{ project.url }}</a>
          </td>
        </tr>
        <tr>
          <th>Homepage</th>
          <td><a target="_blank" :href="project.homepageUrl">{{ project.homepageUrl }}</a></td>
        </tr>
        <tr>
          <th>Created at</th>
          <td>{{ project.createdAt }}</td>
        </tr>
        <tr>
          <th>Language</th>
          <td>{{ project.primaryLanguage ? project.primaryLanguage.name : '--' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .title {
    color: #000 !important
  }
  .title .button {
    margin-right: 5px;
  }
  .subtitle {
    color: #aaa !important;
  }
  .stargazers {
    float: right;
  }
</style>
