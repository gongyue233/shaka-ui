<demo>
禁用状态
</demo>
<template>
  <shaka-switch disabled :checked="true" />
</template>

<script lang="ts">
import ShakaSwitch from "../../../lib/ShakaSwitch.vue";
//使用时应改为 import {ShakaSwitch} from "shaka-ui";

export default {
  components: { ShakaSwitch },
};
</script>
