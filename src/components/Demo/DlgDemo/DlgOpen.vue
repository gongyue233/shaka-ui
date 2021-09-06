<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <shaka-button @click="showDialog">打开 Dialog</shaka-button>
  </div>
</template>

<script>
import ShakaButton from "../../../lib/ShakaButton.vue";
import openShakaDialog from "../../../lib/openShakaDialog";
//使用时应改为 import {ShakaButton, openShakaDialog} from "shaka-ui";

export default {
  components: {
    ShakaButton,
  },
  setup() {
    const showDialog = () => {
      openShakaDialog({
        title: "openShakaDialog函数",
        content: "一键打开Dialog",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>
