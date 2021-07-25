<template>
  <Topnav />
  <Doc />
</template>

<script lang="ts">
import Doc from './Doc.vue';
import Topnav from './Topnav.vue';
export default {
  components: { Topnav, Doc },
  name: "Home",
  component: {
    Topnav, Doc
  }
};
</script>

<style lang="scss" scoped></style>
