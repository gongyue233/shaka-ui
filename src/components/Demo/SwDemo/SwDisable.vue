<demo>
禁用状态
</demo>
<template>
  <shaka-switch disabled :checked="true" />
</template>

<script lang="ts">
import ShakaSwitch from "../../../lib/ShakaSwitch.vue";
export default {
  components: { ShakaSwitch },
};
</script>
