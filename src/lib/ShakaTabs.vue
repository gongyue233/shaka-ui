<template>
  <div class="shaka-tabs">
    <hr />
    <div class="shaka-tabs-nav">
      <div
        class="shaka-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
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
.shaka-tabs{
    border: 1px solid red;
    
}
</style>
