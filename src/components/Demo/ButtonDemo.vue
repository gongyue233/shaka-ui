<template>
  <Demo2 :codeComp="BtnTheme" :description="descriptionHash['theme']" />
  <Demo2 :codeComp="BtnSize" :description="descriptionHash['size']" />
</template>

<script lang="ts">
import Demo2 from "../Demo2.vue";
import BtnTheme from "./BtnDemo/BtnTheme.vue";
import BtnSize from "./BtnDemo/BtnSize.vue";
export default {
  components: { Demo2, BtnTheme, BtnSize },
  setup() {
    const descriptionHash = {
      theme:
        "按钮类型有 warn、danger、normal、default 四种类型，默认为 default 类型。 ",
      size: "按钮大小有 large 、small、middle 三种，默认大小为 middle 。",
    };
    return {
      BtnTheme,
      BtnSize,
      descriptionHash,
    };
  },
};
</script>
