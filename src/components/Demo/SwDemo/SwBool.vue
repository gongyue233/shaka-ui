<demo>
基础用法
</demo>
<template>
  <shaka-switch v-model:checked="checked" />
</template>

<script lang="ts">
import { ref } from "vue";
import ShakaSwitch from "../../../lib/ShakaSwitch.vue";
//使用时应改为 import {ShakaSwitch} from "shaka-ui";

export default {
  components: { ShakaSwitch },
  setup() {
    const checked = ref(false);
    return { checked };
  },
};
</script>
