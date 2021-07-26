<template>
  <router-view />
</template>

<script>
import Home from "./components/Home.vue";
import { ref, provide } from "vue";
export default {
  name: "App",
  components: {
    Home,
  },
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible);  
  },
};
</script>
