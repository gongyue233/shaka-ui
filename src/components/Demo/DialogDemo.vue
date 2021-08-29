<template>
  <div>
    DialogDemo

    <shaka-button @click="toggleDialog">点击控制Dialog</shaka-button>
    <shaka-dialog v-model:visible="dialog1">hi</shaka-dialog>
    <shaka-dialog v-model:visible="dialog2" :closeOnClickOverlay="false"
      >第二个对话框</shaka-dialog
    >
    <shaka-button @click="toggleDialog2">点击控制Dialog2</shaka-button>
    <shaka-button @click="toggleDialog3">点击控制ddddddddddDialog</shaka-button>
    <shaka-dialog
      v-model:visible="dialog3"
      :ok="thrd"
      :cancel="forteg"
      title="传哈的标题"
    >
      第三个对dddddddddd话 deded框hhhhhhhhhhhhhhhhhhhh
    </shaka-dialog>

    <shaka-button @click="showOpenDialog3"
      >点击控制openShakaDialog函数</shaka-button
    >
  </div>
</template>

<script lang="ts">
import ShakaDialog from "../../lib/ShakaDialog.vue";
import ShakaButton from "../../lib/ShakaButton.vue";
import { ref } from "vue";
import openShakaDialog from "../../lib/openShakaDialog";
export default {
  components: { ShakaDialog, ShakaButton },
  setup() {
    const dialog1 = ref(true);
    const toggleDialog = () => {
      dialog1.value = !dialog1.value;
    };
    const dialog2 = ref(false);
    const toggleDialog2 = () => {
      dialog2.value = !dialog2.value;
    };
    const dialog3 = ref(false);
    const toggleDialog3 = () => {
      dialog3.value = !dialog3.value;
    };
    const thrd = () => {
    };
    const forteg = () => {
      return false;
    };
    const showOpenDialog3 = () => {
      openShakaDialog({
        title: "open函数的标题",
        content: "hahha",
        ok() {
          console.log("执行了open函数内的ok函数");
        },
        cancel() {
          console.log("执行了open函数内的cancel函数");
        }
      });
    };

    return {
      dialog1,
      forteg,
      toggleDialog,
      dialog2,
      toggleDialog2,
      thrd,
      dialog3,
      toggleDialog3,
      showOpenDialog3
    };
  },
};
</script>

<style lang="scss" scoped></style>
