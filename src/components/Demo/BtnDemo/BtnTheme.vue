<demo>
按钮类型
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
//使用时应改为 import {ShakaButton} from "shaka-ui";

export default {
  components: { ShakaButton }
};
</script>
