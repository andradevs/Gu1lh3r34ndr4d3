<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import "pokemon-font/css/pokemon-font.css";
import Index from './views/index.vue'
export default {
  name: 'App',
  components: {
    Index,
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background: #222224;
  box-sizing: border-box;
}
</style>
