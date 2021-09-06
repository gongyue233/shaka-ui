<demo>
禁用状态  
</demo>
<template>
  <div>
    <shaka-button :disabled="true">禁用状态</shaka-button>
    <shaka-button disabled>禁用状态</shaka-button>
  </div>
</template>

<script lang="ts">
import ShakaButton from "../../../lib/ShakaButton.vue";
//使用时应改为 import {ShakaButton} from "shaka-ui";
export default {
  components: { ShakaButton },
};
</script>
