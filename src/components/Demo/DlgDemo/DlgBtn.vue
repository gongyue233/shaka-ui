<demo>
“确定” 和 “取消” 按钮用法
</demo>
<template>
  <div>
    <shaka-button @click="toggle">点击打开Dialog</shaka-button>
    <shaka-dialog v-model:visible="visible" :ok="ok" :cancel="cancel">
      <template v-slot:content> 对话框内容 </template>
    </shaka-dialog>
  </div>
</template>

<script>
import ShakaDialog from "../../../lib/ShakaDialog.vue";
import ShakaButton from "../../../lib/ShakaButton.vue";
//使用时应改为 import {ShakaButton, ShakaDialog} from "shaka-ui";

import { ref } from "vue";
export default {
  components: {
    ShakaDialog,
    ShakaButton,
  },
  setup() {
    const ok = () => {
      alert(`按下了 “确定" 按钮`);
    };
    const cancel = () => {
      alert(`按下了 “取消” 按钮`);
    };
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    return { visible, toggle, ok, cancel };
  },
};
</script>
