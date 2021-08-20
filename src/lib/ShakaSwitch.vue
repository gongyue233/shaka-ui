<template>
  <div>
    <button
      class="shaka-switch-button"
      :class="{ 'shaka-switch-checked': checked }"
      @click="toggleSwitch"
    >
      <span class="shaka-switch-span shaka-switch-checked"></span>
    </button>
  </div>
</template>

<script lang="ts">
// 接受外部传递的 checked ，默认值是false
export default {
  name: "ShakaSwitch",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggleSwitch = () => {
      context.emit("update:checked", !props.checked);
    };
    return { toggleSwitch };
  },
};
</script>

<style lang="scss">
$shaka-sw-h: 30px;
$shaka-sw-h2: 28px;
$shaka-sw-active-color: #036c86;
$shaka-sw-inactive-color: #f5f5f5;
.shaka-switch-button {
  height: $shaka-sw-h;
  width: $shaka-sw-h * 2;
  background-color: $shaka-sw-inactive-color;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: $shaka-sw-h/2;
  position: relative;
  .shaka-switch-span {
    position: absolute;
    left: 0px;
    top: 0px;
    height: $shaka-sw-h2;
    width: $shaka-sw-h2;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: $shaka-sw-h2/2;
    transition: all 300ms;
  }
}
.shaka-switch-button.shaka-switch-checked {
  background-color: $shaka-sw-active-color;
  > .shaka-switch-span {
    left: $shaka-sw-h;
    top: 0;
    border: 1px solid $shaka-sw-active-color;
  }
}
.shaka-switch-button:focus {
  outline: none;
}
</style>
