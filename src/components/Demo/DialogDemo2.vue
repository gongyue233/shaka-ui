<template>
  <div>
    <h1>Dialog 对话框</h1>
    <demo-2 :codeComp="DlgVisible" :description="description['vis']" />
  </div>
</template>

<script>
import Demo2 from "../Demo2.vue";
import DlgVisible from "./DlgDemo/DlgVisible.vue";
export default {
  components: { Demo2, DlgVisible },
  setup() {
    const description = {
      vis: `visible 的类型是 Boolean ，当 visible 为 true 时显示 Dialog 。title 属性用于定义标题，默认值为 "标题"。`,
    };
    return {
      Demo2,
      DlgVisible,
      description,
    };
  },
};
</script>

<style lang="scss" scoped></style>
