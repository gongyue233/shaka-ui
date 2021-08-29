<template>
<h1>Button 按钮</h1>
  <Demo2 :codeComp="BtnTheme" :description="descriptionHash['theme']" />
  <Demo2 :codeComp="BtnSize" :description="descriptionHash['size']" />
  <Demo2 :codeComp="BtnDisabled" :description="descriptionHash['disabled']" />
  <demo-2 :codeComp="BtnShape" :description="descriptionHash['shape']" />
  <demo-2 :codeComp="BtnLoad" :description="descriptionHash['loading']" />
</template>

<script lang="ts">
import Demo2 from "../Demo2.vue";
import BtnTheme from "./BtnDemo/BtnTheme.vue";
import BtnSize from "./BtnDemo/BtnSize.vue";
import BtnDisabled from './BtnDemo/BtnDisabled.vue';
import BtnShape from './BtnDemo/BtnShape.vue';
import BtnLoad from './BtnDemo/BtnLoad.vue';


export default {
  components: { Demo2, BtnTheme, BtnSize },
  setup() {
    const descriptionHash = {
      theme:
        "按钮类型有 warn、danger、normal、default 四种类型，默认为 default 类型。 ",
      size: "按钮大小有 large 、small、middle 三种，默认大小为 middle 。",
      disabled:"通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。",
      shape:"支持 square、round 两种类型，通过 round 设置圆形按钮，通过 square 设置方形按钮，默认是 square 。",
      loading:"通过 loading 属性设置按钮为加载状态"
    };
    return {
      BtnTheme,
      BtnSize,
      descriptionHash,
      BtnDisabled,
      BtnShape,
      BtnLoad
    };
  },
};
</script>
