<template>
  <Topnav />
  <div class="banner">
    <h1>Shaka Design</h1>
    <h2>以 Vue3 制作的 UI 框架</h2>
    <ul>
      <li><router-link to="/doc">文档</router-link></li>
      <li>GitHub</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Topnav from "./Topnav.vue";
export default {
  name: "Home",
  components: {Topnav},
  
};
</script>

<style lang="scss" scoped>
.banner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #D3E0EA;  
  > h1{
    padding: 80px 0;
  }
  > h2{
    padding: 10px 0;
  }
  > ul{
    padding: 24px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
    > li{
      $h:36px;
      $w:100px;
      display: inline-block;
      line-height: $h;
      width: $w;
      font-size: 16px;
      margin: 18px;
      border: 1px solid #1687a7;
      border-radius: $h/2;
    }
  }
}
</style>
