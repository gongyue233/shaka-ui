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

export default {
  name: "ShakaSwitch",
  props: { 
    checked: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggleSwitch = () => {
      context.emit('update:checked', !props.checked)
    };
    return {toggleSwitch };
  },
};
</script>

<style lang="scss">
$shaka-sw-h: 30px;
$shaka-sw-h2:28px;
$shaka-sw-active-color: #1687a7;
$shaka-sw-inactive-color: #f5f5f5;
.shaka-switch-button {
  height: $shaka-sw-h;
  width: $shaka-sw-h*2;
  background-color: $shaka-sw-inactive-color ;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: $shaka-sw-h/2;
  position: relative;
  span {
    position: absolute;
    left: 0px;
    top: 0px;
    height: $shaka-sw-h2;
    width: $shaka-sw-h2;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: $shaka-sw-h2/2;
    transition: left 300ms;
  }
}
.shaka-switch-button.checked {
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
