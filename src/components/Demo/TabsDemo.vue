<template>
  <h1>Tabs 标签页</h1>
  <demo :codeComp="TabsSelected" :description="description['selected']" />
  <demo :codeComp="TabsDisabled" :description="description['disabled']" />

</template>

<script>
import Demo from "../Demo.vue";
import TabsSelected from "./TabsDemo/TabsSelected.vue";
import TabsDisabled from "./TabsDemo/TabsDisabled.vue";

export default {
  components: {
    Demo,
    TabsSelected,
    TabsDisabled
  },
  setup() {
    const description = {
      selected: "通过 v-model:selected 绑定当前选中的标签对应的名称。 ",
      disabled:`传入 :disabled="true" 即可禁用标签，disabled 类型是 Boolean 。`
    };
    return {
      Demo,
      description,
      TabsDisabled,
      TabsSelected,
    };
  },
};
</script>
