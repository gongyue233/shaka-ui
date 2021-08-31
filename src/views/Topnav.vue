<template>
  <div class="topnav">
    <svg class="icon menu-logo" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <span class="logo">Shaka</span>
    <ul class="menu">
      <li @click="toggleAside">指南</li>
      <li><router-link to="/">首页</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "Topnav",
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
$shaka-topnav-bg: #036c86;
.topnav {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background-color: $shaka-topnav-bg;
  color: #f5f5f5;
  > .menu-logo {
    display: none;
  }
  > .logo {
    font-size: 22px;
    padding-left: 24px;
  }
  > .menu {
    font-size: 18px;
    display: flex;
    align-items: flex-end;
    > li {
      padding: 0px 12px;
    }
  }
  @media (max-width: 500px) {
    > .logo {
      margin: 0 auto;
      padding: 0px;
      transform: translateX(-15px);
    }
    > .menu {
      display: none;
    }
    > .menu-logo {
      display: block;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
