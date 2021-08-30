<template>
  <div>
    <h1>Dialog 对话框</h1>
    <demo-2 :codeComp="DlgVisible" :description="description['vis']" />
    <demo-2 :codeComp="DlgBtn" :description="description['btn']" />
  </div>
</template>

<script>
import Demo2 from "../Demo2.vue";
import DlgVisible from "./DlgDemo/DlgVisible.vue";
import DlgBtn from "./DlgDemo/DlgBtn.vue";

export default {
  components: { Demo2, DlgVisible, DlgBtn },
  setup() {
    const description = {
      vis: `visible 的类型是 Boolean ，当 visible 为 true 时显示 Dialog，通过 v-mode:visible 来控制 Dialog 显示；
            title 属性用于定义标题，默认值为 "标题"；
            closeOnClickOverlay 类型是 Boolean ，为 true 时点击遮罩层即可关闭 Dialog ，默认值为 true，本例展示 closeOnClickOverlay 为 false 的情况。
            `,
      btn: `ok属性 ：点击 “确定” 按钮触发的函数；cancel属性 ： 点击 “取消” 按钮触发的函数。当传递的函数返回值为 false 时可阻止关闭 Dialog`,
    };
    return {
      Demo2,
      DlgVisible,
      description,
      DlgBtn,
    };
  },
};
</script>

<style lang="scss" scoped></style>
