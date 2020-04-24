<template lang="pug">
  #app
    MemeMaker
</template>

<script>
import MemeMaker from './components/MemeMaker.vue'

export default {
  name: 'App',
  components: {
    MemeMaker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
