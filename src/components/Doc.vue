<template>
  <div class="doc-nav" v-if="asideVisible">
    <div class="dov-nav-item">
      <span class="sort-name">开发指南</span>
      <ul class="items">
        <li>介绍</li>
        <li>安装</li>
      </ul>
    </div>
    <div class="dov-nav-item">
      <span class="sort-name">基础组件</span>
      <ul class="items">
        <li>Switch 开关</li>
        <li>Button 按钮</li>
        <li>Dialog 弹出框</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "Doc",
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible}
    
  },
};
</script>

<style lang="scss" scoped>
.doc-nav {
  padding: 24px 0px 0px 30px;
  min-width: 220px;
  max-width: 220px;
  overflow-y: auto;  
}
.dov-nav-item {
  color: #1687a7;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  > .sort-name {
    font-weight: bold;
    font-size: 18px;
    padding: 8px 0px;
  }
  > .items > li {
    font-size: 16px;
    margin: 8px 0px;
    padding: 8px 0px;
  }
}
</style>
