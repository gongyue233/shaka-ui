<template>
  <Demo2 :codeComp="BtnTheme" />
</template>

<script lang="ts">
import Demo2 from "../Demo2.vue";
import BtnTheme from "./BtnDemo/BtnTheme.vue";
export default {
  components: { Demo2, BtnTheme },
  setup() {
    return {
      BtnTheme
    };
  },
};
</script>

<style lang="scss" scoped></style>
