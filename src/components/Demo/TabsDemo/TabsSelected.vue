<demo>
基础用法
</demo>
<template>
<div>
  <shaka-tabs v-model:selected="selectedName" class="tabs">
    <shaka-tab title="导航1">内容1</shaka-tab>
    <shaka-tab title="导航2">内容2</shaka-tab>
    <shaka-tab title="导航3">内容3</shaka-tab>
    <shaka-tab title="导航4">内容ddddddddddddddddddddddddddddddddddddddddddddddddd4</shaka-tab>
  </shaka-tabs>
</div>
</template>

<script lang="ts">
import { ref } from "vue";
import ShakaTabs from "../../../lib/ShakaTabs.vue";
import ShakaTab from "../../../lib/ShakaTab.vue";

export default {
  components: { ShakaTabs, ShakaTab },
  setup() {
    const selectedName = ref("导航1");
    return {
      selectedName,
    };
  },
};
</script>
<style lang="scss" scope>
  .tabs{
    width: 100%;
  }
</style>
