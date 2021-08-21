<template>
  <div class="shaka-demo-tabs">
    ShakaTabs的 Demo 页面
    <hr />
    <shaka-tabs class="tabs-demo" v-model:selected="selectedName">
      <shaka-tab title="导航1">内容1</shaka-tab>
      <shaka-tab title="导航2sss">内容2ss</shaka-tab>
      <shaka-tab title="导航3">内容3</shaka-tab>
      <shaka-tab title="导航4">内容4</shaka-tab>
    </shaka-tabs>
  </div>
</template>

<script lang="ts">
import ShakaTabs from "../../lib/ShakaTabs.vue";
import ShakaTab from "../../lib/ShakaTab.vue";
import { ref } from "vue";
export default {
  components: {
    ShakaTabs,
    ShakaTab,
  },
  setup() {
    const selectedName = ref("导航1");
    return {
      selectedName,
    };
  },
};
</script>

<style lang="scss">
.shaka-demo-tabs {
  .tabs-demo {
    width: 300px;
  }
}
</style>
