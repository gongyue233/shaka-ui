<template>
  <div>
    <button
      class="shaka-switch-button"
      :class="{ checked }"
      @click="toggleSwitch"
    >
      <span class="shaka-switch-span checked"></span>
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
$switch-active-color: #1687a7;
$switch-inactive-color: #f5f5f5;
.shaka-switch-button {
  height: $switch-h;
  width: $switch-h * 2;
  background-color: $switch-inactive-color;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: $switch-h/2;
  position: relative;
  span {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 28px;
    width: 28px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: $switch-h/2;
    transition: left 1000ms;
  }
}
.shaka-switch-button.checked {
  background-color: $switch-active-color;
  > .shaka-switch-span {
    left: 30px;    
    top: 0;
    border: 1px solid $switch-active-color;
  }
}
.shaka-switch-button:focus{
  outline: none;
}
</style>
