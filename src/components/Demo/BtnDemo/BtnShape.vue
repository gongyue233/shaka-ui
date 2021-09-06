<demo>
按钮形状
</demo>
<template>
  <div>
      <shaka-button shape="round">圆形按态</shaka-button>
  </div>
</template>

<script lang="ts">
import ShakaButton from "../../../lib/ShakaButton.vue";
//使用时应改为 import {ShakaButton} from "shaka-ui";

export default {
  components: { ShakaButton }
};
</script>