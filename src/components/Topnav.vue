<template>
  <div class="topnav">
    <span class="logo">Shaka</span>
    <ul class="menu">
      <li>GitHub</li>
      <li><router-link to="/">首页</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Topnav",
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background-color: #276678;
  color: #f6f5f5;
}
.logo {
  font-size: 22px;
  padding-left: 24px;
}
.menu {
  font-size: 18px;
  display: flex;
  align-items: flex-end;
}
.menu > li {
  padding: 0px 12px;
}
</style>
