<template>
  <div class="switch-demo">
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <switch-1 />
      <div class="code">
        <pre>{{ Switch1.__sourceCode }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import Switch1 from "../Demo/Switch1.vue";
export default {
  name: "SwitchDemo",
  components: { Switch1 },
  setup() {
    return {
      Switch1, //必须 return 后才可以在 template 内展示
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
