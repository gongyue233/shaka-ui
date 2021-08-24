<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "Markdown",
  props: {
    //要求外部必须传入 path
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const content = ref<String>(null);
    import(props.path).then((result) => {
      content.value = result.default;
    });
    return { content };
  },
};
</script>
