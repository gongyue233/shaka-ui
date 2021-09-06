<demo>
禁用状态
</demo>
<template>
  <div>
    <shaka-tabs v-model:selected="selectedName" class="tabs">
      <shaka-tab title="导航1">内容1</shaka-tab>
      <shaka-tab title="导航2" :disabled="true">内容2</shaka-tab>
      <shaka-tab title="导航3">内容3</shaka-tab>
    </shaka-tabs>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import ShakaTabs from "../../../lib/ShakaTabs.vue";
import ShakaTab from "../../../lib/ShakaTab.vue";
//使用时应改为 import {ShakaTab, ShakaTabs} from "shaka-ui";


export default {
  components: { ShakaTabs, ShakaTab },
  setup() {
    const selectedName = ref("导航3");
    return {
      selectedName,
    };
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  width: 300px;
}
</style>
