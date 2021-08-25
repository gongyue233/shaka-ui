<demo>
  SwitchDemo文件
</demo>
<template>
  <shaka-switch v-model:checked="checked" />
</template>

<script lang="ts">
import { ref } from "vue";
import ShakaSwitch from "../../../lib/ShakaSwitch.vue";
export default {
  components: { ShakaSwitch },
  setup() {
    const checked = ref(false);
    return { checked };
  },
};
</script>
  