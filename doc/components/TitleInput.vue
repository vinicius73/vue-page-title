<script lang="ts">
import { ref, defineComponent, onBeforeUnmount } from 'vue'
import { shuffle, random } from 'radash'
import { useTitle } from '../../lib'

const LISTS = [
  ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Sanji', 'Tony Tony Chopper', 'Nico Robin', 'Franky', 'Brook', 'Jinbe', 'Nefertari Vivi'],
  ['Trafalgar D. Water Law', 'Bepo', 'Penguin', 'Shachi', 'Jean Bart', 'Ikkaku', 'Uni', 'Clione'],
  ['Eustass Kid', 'Killer', 'Heat', 'Heat'],
  ['Shanks', 'Benn Beckman', 'Lucky Roux', 'Yasopp', 'Limejuice', 'Bonk Punch', 'Monster', 'Building Snake', 'Hongo', 'Gab', 'Rockstar', 'Uta '],
  ['Edward Newgate', 'Marco the Phoenix', 'Portgas D. Ace', 'Kozuki Oden', 'Diamond Jozu', 'Thatch', 'Flower Sword Vista', 'Blamenco', 'Rakuyo', 'Namur', 'Blenheim', 'Curiel', 'Kingdew', 'Haruta', 'Water Buffalo Atmos', 'Speed Jiru', 'Fossa', 'Izou'],
  ['Charlotte Linlin', 'Katakuri', 'Smoothie', 'Cracker', 'Perospero', 'Amande', 'Oven', 'Daifuku', 'Brûlée', 'Mont-d\'Or'],
  ['Capone Bege', 'Vito', 'Gotti', 'Charlotte Chiffon'],
  ['Vinsmoke Judge', 'Vinsmoke Reiju', 'Vinsmoke Ichiji', 'Vinsmoke Niji', 'Vinsmoke Yonji'],
  ['Gol D. Roger', 'Silvers Rayleigh', 'Scopper Gaban', 'Crocus', 'Kozuki Oden', 'Kozuki Toki', 'Shanks', 'Buggy', 'Inuarashi', 'Nekomamushi']
]

const getRandomList = (): string[] => {
  return shuffle(LISTS[random(0, LISTS.length - 1)])
}

export default defineComponent({
  name: 'TitleInput',
  setup() {

    let titles = getRandomList()
    const nextTitle = () => `🏴‍☠️ ${titles.pop()}`

    const model = ref<string>(nextTitle())

    const { title } = useTitle(model)

    const refresh = () => {
      if (titles.length === 0) {
        titles = getRandomList()
      }

      //@ts-ignore
      model.value = nextTitle()
    }

    const interval = setInterval(refresh, 5_000)

    const stopRefresh = () => clearInterval(interval)

    onBeforeUnmount(stopRefresh)

    return {
      model,
      title,
      stopRefresh
    }
  },
})
</script>


<template>
  <label class="title-input">
    <input @input="stopRefresh" type="text" v-model="model" />

    <span>
      {{ title }}
    </span>
  </label>
</template>

<style scoped>
.title-input {
  display: block;
  font-size: 1.1rem;
}

.title-input input {
  width: 100%;
  display: block;
  padding: 0.5em;
  font-size: 2rem;
  font-family: monospace;
  line-height: 3rem;
  background-color: rgb(255 255 255 / 50%);
}

.title-input span {
  line-height: 2rem;
  display: block;
  font-family: monospace;
  text-shadow: -1px -1px 1em #fff;
}
</style>
