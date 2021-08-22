<template>
  <Topnav />
  <div class="shaka-home-banner">
    <h1>Shaka Design</h1>
    <h2>以 Vue3 制作的 UI 框架</h2>
    <ul class="shaka-home-link">
      <router-link to="/doc">文档</router-link>
      <router-link to="/">GitHub</router-link>
    </ul>
    <div class="shaka-home-features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <p>Shaka 组件库 采用 Vue 3 来制作组件</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <p>Shaka 组件库 源代码采用 TypeScript 书写（非严格审查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-shiyong"></use>
          </svg>
          <p>Shaka 组件库 简单易用，阅读文档便可快速上手</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "./Topnav.vue";
export default {
  name: "Home",
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$shaka-home-bg: #036c86;
$shaka-home-bg-light: #35bdbd;
$shaka-home-intro: 300px;
$shaka-home-intro-md: 2 * $shaka-home-intro + 20px;
.shaka-home-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  > h1 {
    padding-top: 100px;
  }
  > h2 {
    padding-bottom: 10px;
    padding-top: 60px;
  }
  > .shaka-home-link {
    padding: 24px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
    > a {
      $h: 36px;
      $w: 100px;
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
  > .shaka-home-features {
    width: 400px;
    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      > li {
        width: $shaka-home-intro;
        display: grid;
        justify-content: start;
        grid-template-areas: "icon text";
        margin: 16px 0;
        padding: 0 32px;
        > .icon {
          grid-area: icon;
          width: 64px;
          height: 64px;
          margin-right: 16px;
        }
        > p {
          align-self: center;
          font-size: 16px;
          grid-area: text;
          text-align: center;
        }
      }
    }
    @media (min-width: 800px) and (max-width: 1200px) {
      width: $shaka-home-intro-md;
      > ul {
        justify-content: space-between;
      }
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }
    @media (max-width: 800px) {
      width: 400px;
    }
  }
}
</style>
