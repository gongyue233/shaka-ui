<demo>
ShakaButton 组件支持 theme
</demo>
<template>
  <div>
    <shaka-button>默认按钮</shaka-button>
    <shaka-button theme="warn">警告按钮</shaka-button>
    <shaka-button theme="normal">普通按钮</shaka-button>
    <shaka-button theme="danger">危险按钮</shaka-button>
  </div>
</template>

<script lang="ts">
import ShakaButton from "../../../lib/ShakaButton.vue";
export default {
  components: { ShakaButton }
};
</script>
