<template>
  <div class="demo">
    <h3>{{ codeComp.__sourceCodeTitle }}</h3>
    <p>{{ description }}</p>
      <component :is="codeComp" class="comps"></component>
    
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
    //接受外部传递的组件 codeComp
    codeComp: Object,
    description: String,
  },
  setup(props) {
    const codeVisible = ref(true);
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
$shaka-demo-border:#ebebeb;
.demo {
  margin-bottom: 24px;
  color: #323233;
  background-color: #fff;
  max-width: 80%;
  > h3 {
    margin-bottom: 16px;
    font-size: 22px;
    color: #1F2F3D;
  }
  > p {
    color: #34495e;
    font-size: 15px;
    line-height: 1.5;
    padding-bottom: 16px;
  }
  > .comps{
    display: grid;
    grid-row: auto;
    grid-gap: 16px;
    justify-content: start; 
    grid-auto-flow: column;
  }
  > .demo-code {
    margin-top: 16px;
    border:1px solid #ebebeb;
    border-radius: 4px;
    > .code-show {
      text-align: center;
      margin: 10px;
      cursor: pointer;
    }
  }
}
</style>
