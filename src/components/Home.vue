<template>
  <Topnav />
  <div class="shaka-home-banner">
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
$shaka-home-bg:#036c86;
$shaka-home-bg-light:#35bdbd;
.shaka-home-banner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: normal;
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
      font-weight: bold;
      border: 1px solid $shaka-home-bg;
      color: $shaka-home-bg;
      border-radius: $h/2;
    }
  }
}
</style>
