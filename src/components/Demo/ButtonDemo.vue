<template>
  <Demo2 :codeComp="BtnTheme" :description="des" />
</template>

<script lang="ts">
import Demo2 from "../Demo2.vue";
import BtnTheme from "./BtnDemo/BtnTheme.vue";
export default {
  components: { Demo2, BtnTheme },
  setup() {
    const des = "按钮类型支持 warn、danger、normal、default，默认为 default 。"
    return {
      BtnTheme,
      des
    };
  },
};
</script>

<style lang="scss" scoped></style>
