<template>
  <div class="topnav">
    <img src="../assets/menu.png" alt="" @click="toggleAside">
    <span class="logo">Shaka</span>
    <ul class="menu">
      <li>GitHub</li>
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
.topnav {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background-color: #1687a7;
  color: #f6f5f5;
  img{
    display: none;    
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
  @media (max-width:500px) {
    >.logo{
      margin: 0 auto;
      padding: 0px;
    }
    > .menu{
      display: none;
    }
    img{
      display:inline-block;
      width: 30px;
      height: 30px;
    }
  }
  
}
</style>
