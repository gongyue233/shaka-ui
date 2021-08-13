<template>
  <div class="doc-all">
    <Topnav class="doc-top" />
    <div class="doc-main">
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
            <li>
              <router-link to="/doc/switch">Switch 开关</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 按钮</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 对话框</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tab 组件</router-link>
            </li>
          </ul>
        </div>
      </div>
      <main class="doc-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "./Topnav.vue";
export default {
  name: "Doc",
  components: {
    Topnav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
.doc-all {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .doc-main {
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    > .doc-nav {
      flex-shrink: 0;
      padding: 24px 0px 0px 30px;
      min-width: 260px;
      max-width: 260px;
      overflow-y: auto;
      > .dov-nav-item {
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
    }
    > .doc-content {
      flex-grow: 1;
      overflow-y: auto;
      padding: 20px 40px 20px 20px;
    }
  }
}
</style>
