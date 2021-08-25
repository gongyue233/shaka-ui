<template>
  <div class="switch-demo">
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <sw-bool />
      <div class="code">
        <pre
          class="language-html"
          v-html="
            Prism.highlight(SwBool.__sourceCode, Prism.languages.html, 'html')
          "
        ></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import SwBool from "./SwDemo/SwBool.vue";
export default {
  name: "SwitchDemo",
  components: { SwBool },
  setup() {
    const Prism = (window as any).Prism;
    return {
      SwBool, //必须 return 后才可以在 template 内展示
      Prism,
    };
  },
};
</script>

<style lang="scss" scoped>
.switch-demo {
  border: 1px solid red;
  padding: 20px;
  > .demo {
    border: 1px solid gray;
    padding: 20px;
    > .code {
      border: 1px solid red;
    }
  }
}
</style>
