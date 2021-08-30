<template>
  <h1>Tabs 标签页</h1>
  <demo-2 :codeComp="TabsSelected" :description="description['selected']" />
</template>

<script>
import Demo2 from "../Demo2.vue";
import TabsSelected from "./TabsDemo/TabsSelected.vue";
export default {
  components: {
    Demo2,
    TabsSelected,
  },
  setup() {
    const description = {
      selected: "通过 v-model:selected 绑定当前选中的标签对应的名称。 ",
    };
    return {
      Demo2,
      description,
      TabsSelected,
    };
  },
};
</script>
