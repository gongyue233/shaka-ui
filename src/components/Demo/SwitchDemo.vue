<template>
  <div>switchDemo</div>
  <shaka-switch v-model:checked="checked" />
</template>

<script lang="ts">
import { ref } from 'vue';
import ShakaSwitch from '../../lib/ShakaSwitch.vue';
export default {
  name: "SwitchDemo",
  components: {ShakaSwitch},
  setup(){
    const checked = ref(true);
    return {checked}
  }
};
</script>

<style lang="scss" scoped>
</style>
