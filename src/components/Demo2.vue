<template>
  <div class="demo">
    <h2>{{ codeComp.__sourceCodeTitle }}</h2>
    <component :is="codeComp"></component>
    <div class="demo-code">
      <div class="code-show" @click="toggleCode">显示代码</div>
      <div class="code" v-if="codeVisible">
        <pre class="language-html" v-html="codeHtml"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
import { ref, computed } from "vue";
const Prism = (window as any).Prism;

export default {
  props: {
    codeComp: Object,
  },
  setup(props) {
    const codeVisible = ref(false);
    const toggleCode = () => {
      codeVisible.value = !codeVisible.value;
    };
    const codeHtml = computed(() => {
      return Prism.highlight(
        props.codeComp.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    return {
      Prism,
      codeHtml,
      codeVisible,
      toggleCode,
    };
  },
};
</script>

<style lang="scss" scoped>
> .demo {
  border: 1px solid gray;
  padding: 20px;
  > .demo-code {
    border: 1px solid gray;
    padding: 10px 0;
    > .code-show {
      border: 1px solid red;
    }
  }
}
</style>
