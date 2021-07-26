<template>
  <Topnav />
  <Doc />
</template>

<script lang="ts">
import Doc from "./Doc.vue";
import Topnav from "./Topnav.vue";
export default {
  name: "Home",
  components: { Topnav, Doc },
  
};
</script>

<style lang="scss" scoped></style>
