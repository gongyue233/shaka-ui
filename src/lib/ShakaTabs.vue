<template>
  <div class="shaka-tabs">
    <div class="shaka-tabs-nav">
      <div
        class="shaka-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
      >
        <span>{{ t }}</span>
      </div>
    </div>
    <div class="shaka-tabs-content">
      <component
        class="shaka-tabs-content-item"
        v-for="(tab, index) in defaults"
        :is="tab"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ShakaTab from "./ShakaTab.vue";
export default {
  name: "ShakaTabs",
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((t) => {
      if (t.type !== ShakaTab) {
        // ShakaTabs检查子元素类型
        throw new Error("ShakaTabs 的子标签必须是 ShakaTab");
      }
    });
    const titles = defaults.map((tab) => {
      return tab.props.title;
    });
    return {
      defaults,
      titles,
    };
  },
};
</script>
<style lang="scss">
$border-color: #d9d9d9;
$color: #333;
$shaka-tabs-font: 14px;
$shaka-tabs-font2: 16px;
$shaka-tabs-span-h: 30px;
.shaka-tabs {
  display: flex;
  flex-direction: column;
  color: $color;
  border: 1px solid $border-color;
  width: fit-content;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  > .shaka-tabs-nav {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: nowrap;
    border-bottom: 1px solid $border-color;
    > .shaka-tabs-nav-item {
      padding: 10px 12px;
      cursor: pointer;
      > span {
        font-size: $shaka-tabs-font;
      }
    }
  }
  > .shaka-tabs-content {
    padding: 24px 20px;
    font-size: $shaka-tabs-font2;
  }
}
</style>
