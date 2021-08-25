<template>
  <div class="demo">
    <BtnSize />
    <div class="code">
      <pre
        class="language-html"
        v-html="
          Prism.highlight(BtnSize.__sourceCode, Prism.languages.html, 'html')
        "
      ></pre>
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import BtnSize from "./BtnDemo/BtnSize.vue";
export default {
  name: "SwitchDemo",
  components: { BtnSize },
  setup() {
    const Prism = (window as any).Prism;
    return {
      BtnSize, //必须 return 后才可以在 template 内展示
      Prism,
    };
  },
};
</script>

<style lang="scss" scoped>
> .demo {
  border: 1px solid gray;
  padding: 20px;
  > .code {
    border: 1px solid red;
  }
}
</style>
