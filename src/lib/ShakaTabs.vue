<template>
  <div class="shaka-tabs">
    <div class="shaka-tabs-nav" ref="container">
      <div
        class="shaka-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        :class="{ selected: t === selected }"
        :ref="
          (el) => {
            if (el) navItems[index] = el; //el表示当前的元素
          }
        "
        @click="select(t)"
      >
        <span>{{ t }}</span>
      </div>
      <div class="shaka-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="shaka-tabs-content">
      <component
        class="shaka-tabs-content-item"
        v-for="(tab, index) in defaults"
        :is="tab"
        :key="index"
        :class="{ selected: tab.props.title === selected }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ShakaTab from "./ShakaTab.vue";
import { onMounted, onUpdated, ref } from "vue";
export default {
  name: "ShakaTabs",
  props: {
    // 接受初始被选中的 标签
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    console.log("setup没问题");
    const defaults = context.slots.default();
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const makeIndicator = (init: Boolean) => {
      const divs = navItems.value;
      // 删选出类名里包括 selected 的div
      console.log("indicator容器");
      console.log(indicator.value);
      //删选出被选中的标签——result，
      //或者使用find，但是find有的时候不兼容
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0];
      //获得被选中的标签名宽度
      const { width } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";

      //动态设置 indicator
      const left1 = container.value.getBoundingClientRect().left;
      const left2 = result.getBoundingClientRect().left;
      indicator.value.style.left = left2 - left1 + "px";

      //设置indicator的动画时间
      if (init) {
        indicator.value.style.transition = "0ms";
      } else {
        indicator.value.style.transition = "250ms";
      }
    };
    onMounted(() => {
      makeIndicator(true);
    });
    onUpdated(() => {
      makeIndicator(false);
    });
    defaults.forEach((t) => {
      if (t.type !== ShakaTab) {
        // ShakaTabs检查子元素类型
        throw new Error("ShakaTabs 的子标签必须是 ShakaTab");
      }
    });
    const titles = defaults.map((tab) => {
      return tab.props.title;
    });
    const select = (title: String) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      select,
      navItems,
      indicator,
      container,
    };
  },
};
</script>
<style lang="scss">
$border-color: #d9d9d9;
$color: #333;
$shaka-tabs-font: 14px;
$shaka-tabs-font2: 16px;
$shaka-tabs-color: #1687a7;
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
    position: relative;
    > .shaka-tabs-nav-item {
      padding: 12px 12px;
      cursor: pointer;
      > span {
        font-size: $shaka-tabs-font;
      }
      &.selected {
        color: $shaka-tabs-color;
      }
    }
    > .shaka-tabs-nav-indicator {
      position: absolute;
      height: 3px;
      background-color: $shaka-tabs-color;
      bottom: -1px;
      left: 0px;
    }
  }
  > .shaka-tabs-content {
    padding: 20px 20px;
    font-size: $shaka-tabs-font2;
    > .shaka-tabs-content-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
