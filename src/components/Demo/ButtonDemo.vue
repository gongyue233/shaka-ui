<template>
<div>
  <h1>ButtonDemo</h1>
  <shaka-button size="large" theme="default">提交按钮</shaka-button>
  <shaka-button disabled>只有disabled</shaka-button>
  <shaka-button :disabled="true">disabled为 true</shaka-button>
  <shaka-button :disabled="false" size="large" theme="normal">disabled为 false</shaka-button>


</div>
</template>

<script lang="ts">
import ShakaButton from '../../lib/ShakaButton.vue';
export default {
  components: { ShakaButton },
  name: "ButtonDemo",
  comments:{ShakaButton},
};
</script>

<style lang="scss" scoped>
</style>
