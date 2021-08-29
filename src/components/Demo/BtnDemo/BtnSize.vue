<demo>
按钮大小  
</demo>
<template>
  <div>
    <shaka-button size="large">大按钮</shaka-button>
    <shaka-button size="small">小按钮</shaka-button>
    <shaka-button>中型按钮</shaka-button>
    <shaka-button size="middle">中型按钮</shaka-button>
  </div>
</template>

<script lang="ts">
import ShakaButton from "../../../lib/ShakaButton.vue";
export default {
  components: { ShakaButton }
};
</script>
