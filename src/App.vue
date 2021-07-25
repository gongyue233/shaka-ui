<template>
  <Home />  
  <router-link to="/doc">侧边栏</router-link>

  <hr>
  <router-view />
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
