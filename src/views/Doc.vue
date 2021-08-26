<template>
  <div class="doc-all">
    <Topnav class="doc-top" />
    <div class="doc-main">
      <div class="doc-nav" v-if="asideVisible">
        <div class="dov-nav-item">
          <span class="sort-name">开发指南</span>
          <ul class="items">
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-start">开始使用</router-link>
            </li>
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
$shaka-doc-color: #036c86;
$shaka-doc-color-lg: #35bdbd;
$shaka-doc-font-color: #304455;
.doc-all {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .doc-main {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    position: relative;
    > .doc-nav {
      border-right: 1px solid gray;
      background-color: #fff;
      flex-shrink: 0;
      padding: 24px 0px 0px 30px;
      width: 260px;
      overflow-y: auto;
      @media (max-width: 800px) {
        position: absolute;
        z-index: 10;
        border-bottom: 1px solid gray;
      }
      > .dov-nav-item {
        color: $shaka-doc-font-color;
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
          > a {
            &.router-link-active {
              color: $shaka-doc-color;
              font-weight: bold;
            }
            &:hover {
              color: $shaka-doc-color;
              font-weight: bold;
            }
          }
        }
      }
    }
    > .doc-content {
      flex-grow: 1;
      overflow-y: auto;
      padding: 20px 40px 20px 40px;
    }
  }
}
</style>
