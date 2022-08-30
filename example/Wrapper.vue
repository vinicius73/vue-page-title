<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import svgToMiniDataURI from 'mini-svg-data-uri'
import { throttle } from 'radash'
import { useTitle } from '../lib'

const getPattern = (val: string): string => {
  return svgToMiniDataURI(
    //@ts-ignore
    globalThis.trianglify({ height: 540, width: 960, seed: val })
      .toSVGTree()
      .toString()
  )
}

const getStyle = (val: string) => {
  return {
    'background-image': `url("${getPattern(val)}")`
  }
}

export default defineComponent({
  name: 'Wrapper',
  setup() {
    const { title } = useTitle()

    const style = ref(getStyle(title.value))

    const refresh = throttle({ interval: 100 },(val: string) => {
      style.value = getStyle(title.value)
    })

    watch(title, refresh)

    return {
      style
    }
  },
})
</script>

<template>
  <div :style="style" id="wrapper">
    <slot />
  </div>
</template>

<style scoped>
#wrapper {
  background-position: center;
  background-size: cover;
}
</style>

<style>
body {
  min-height: 100vh;
  padding: 0;
}
</style>