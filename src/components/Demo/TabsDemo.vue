<template>
  <h1>Tabs 标签页</h1>
  <demo-2 :codeComp="TabsSelected" :description="description['selected']" />
  <demo-2 :codeComp="TabsDisabled" :description="description['selected']" />

</template>

<script>
import Demo2 from "../Demo2.vue";
import TabsSelected from "./TabsDemo/TabsSelected.vue";
import TabsDisabled from "./TabsDemo/TabsDisabled.vue";

export default {
  components: {
    Demo2,
    TabsSelected,
    TabsDisabled
  },
  setup() {
    const description = {
      selected: "通过 v-model:selected 绑定当前选中的标签对应的名称。 ",
      disabled:`传入 :disabled="true" 即可禁用标签，disabled 是 Boolean 。`
    };
    return {
      Demo2,
      description,
    TabsDisabled,
      TabsSelected,
    };
  },
};
</script>
