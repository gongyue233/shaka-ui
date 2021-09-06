<demo>
加载状态
</demo>
<template>
  <div>
    <shaka-button :loading="true">加载状态</shaka-button>
    <shaka-button loading>加载状态</shaka-button>
  </div>
</template>

<script lang="ts">
import ShakaButton from "../../../lib/ShakaButton.vue";
//使用时应改为 import {ShakaButton} from "shaka-ui";
export default {
  components: { ShakaButton },
};
</script>
