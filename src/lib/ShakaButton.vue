<template>
  <button class="shaka-button">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: "ShakaButton",
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: "middle",
    },
  },
};
</script>

<style lang="scss">
$shaka-btn-clr: white;
$shaka-btn-clr-b: #1687a7;
$shaka-btn-border: 1px;
$shaka-btn-radius: 0;

$shaka-btn-padding-md: 14px;
$shaka-font-size-md: 14px;
$shaka-btn-h-md: 42px;

$shaka-font-size-lg: 16px;
$shaka-btn-h-lg: 50px;
$shaka-btn-padding-lg: 16px;

$shaka-font-size-sm: 12px;
$shaka-btn-h-sm: 34px;
$shaka-btn-padding-sm: 12px;
.shaka-button {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: $shaka-btn-clr-b;
  color: $shaka-btn-clr;
  height: $shaka-btn-h-md;
  padding: 10px $shaka-btn-padding-md;
  border: $shaka-btn-border solid fade-out($color: #1687a7, $amount: 0.8);
  font-size: $shaka-font-size-md;
  &:hover,
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
