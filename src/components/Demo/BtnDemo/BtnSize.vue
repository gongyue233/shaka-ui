<demo>
按钮大小  
</demo>
<template>
  <div>
    <h1>ButtonDemo</h1>
    <shaka-button size="large">大按钮</shaka-button>
    <shaka-button size="small">小按钮</shaka-button>
    <shaka-button>默认中型按钮</shaka-button>
    <shaka-button size="middle">默认中型按钮</shaka-button>
  </div>
</template>

<script lang="ts">
import ShakaButton from "../../../lib/ShakaButton.vue";
export default {
  components: { ShakaButton }
};
</script>
