<template>
  <div id="app" class="container">
    <!-- <b-button variant="outline-primary">Button</b-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HomePage/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './views/HomePage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HomePage
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
