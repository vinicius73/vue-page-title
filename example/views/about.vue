<script lang="ts">
import { defineComponent } from 'vue'
import { draw } from 'radash'
import Hero from '../components/Hero.vue';
import { Telegram, Twitter, Github, Web } from '../components/icons'

const NAMES = [
  'Luiz Vinicius',
  'Vinicius Reis',
  '@vinicius73',
]

const LINKS = [{
  icon: Telegram,
  text: 't.me/vinicius73',
  url: 'https://t.me/vinicius73'
}, {
  icon: Twitter,
  text: 'twitter.com/luizvinicius73',
  url: 'https://twitter.com/luizvinicius73'
}, {
  icon: Github,
  text: 'github.com/vinicius73',
  url: 'https://github.com/vinicius73'
}, {
  icon: Web,
  text: 'vinicius73.dev',
  url: 'https://vinicius73.dev'
}]

export default defineComponent<{ $interval: number, actual: string, links: typeof LINKS }>({
  name: 'About',
  LINKS,
  title() {
    return this.actual
  },
  components: {
    Hero,
  },
  data () {
    return {
      actual: 'Fullstack Severino'
    }
  },
  computed: {
    links () {
      return LINKS
    }
  },
  mounted () {
    this.$interval = setInterval(() => {
      this.actual = draw(NAMES)
    }, 3_000)
  },
  beforeUnmount() {
    clearInterval(this.$interval)
  }
})
</script>

<template>
  <Hero>
    <div class="page-about">
      <h1>{{ actual }}</h1>
      <figure>
        <img src="https://gravatar.com/avatar/f803c45d62a468e0cb990398c004bd3e?s=300" :alt="actual" />
        <figcaption>
          <p>
            I am passionate about coding and open source but has more hobbies than time to work on them, with a
            love for movies, books, manga, comics, games and more.
          </p>
          <p>
            You can find my projects on <a href="https://github.com/vinicius73" target="_blank">Github</a> and my
            articles on <a href="https://dev.to/vinicius73" target="_blank">dev.to/vinicius73</a> and <a
              href="https://medium.com/@LuizVinicius73" target="_blank" rel="noopener noreferrer">Medium</a>.
          </p>
          <p>
            I also have some videos on <a href="https://www.youtube.com/c/CODECASTS" target="_blank">YouTube</a>.
          </p>
        </figcaption>
      </figure>
      <ul>
        <li v-for="row in links" :key="row.url">
          <a :href="row.url" :title="row.text" target="_blank">
            <component :is="row.icon" />
          </a>
        </li>
      </ul>
    </div>
  </Hero>
</template>

<style scoped>
.page-about {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.2rem;
  background-color: #fff;
  border-radius: 1rem;
}

figure {
  display: flex;
  margin-bottom: 1em;
  align-items: center;
}

figure img {
  aspect-ratio: 1 / 1;
  max-height: 300px;
}

figure figcaption {
  padding-left: 1rem;
  align-self: baseline;
}

h1 {
  font-size: 3rem;
  margin-top: 0;
}

p {
  font-size: 1.3rem;
}

p + p {
  margin-top: 1rem;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
}

ul a {
  padding: 0;
  color: #002136;
}

ul svg {
  font-size: 2rem;
}

@media (max-width: 700px) {
  figure {
    flex-direction: column;
  }

  figure figcaption {
    padding-right: 0;
  }

  figure img {
    margin-bottom: 1rem;
  }
}
</style>