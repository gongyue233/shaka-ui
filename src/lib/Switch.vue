<template>
  <div>
    <button
      class="shaka-switch-button"
      :class="{ checked }"
      @click="toggleSwitch"
    >
      <span class="shaka-switch-span"></span>
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "Switch",
  setup() {
    const checked = ref(false);
    const toggleSwitch = () => {
      checked.value = !checked.value;
      console.log("checked的值" + checked.value);
    };
    return { checked, toggleSwitch };
  },
};
</script>

<style lang="scss">
$switch-h: 30px;
$switch-color: #1687a7;
.shaka-switch-button {
  height: $switch-h;
  width: $switch-h * 2;
  border: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: $switch-h/2;
  position: relative;
  > .shaka-switch-span {
    position: absolute;
    border: 1px solid $switch-color;
    right: -1px;
    top: -1px;
    height: $switch-h;
    width: $switch-h;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: $switch-h/2;
  }
}
</style>
