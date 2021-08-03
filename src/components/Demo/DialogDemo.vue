<template>
  <div>DialogDemo

    <shaka-button @click="toggleDialog">点击控制Dialog</shaka-button>
    <shaka-dialog v-model:visible="x">hi</shaka-dialog>

  </div>
</template>

<script lang="ts">
import ShakaDialog from '../../lib/ShakaDialog.vue';
import ShakaButton from '../../lib/ShakaButton.vue';
import { ref } from "vue";

export default {
  components: { ShakaDialog, ShakaButton },
  setup(){
    const x = ref(false);
    const toggleDialog = () =>{
      x.value = !x.value;
      console.log('toggleDialog函数被执行了')
    };
    return {x, toggleDialog}

  }
}
</script>

<style lang="scss" scoped>
</style>
