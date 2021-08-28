<template>
  <div>
    <button
      class="shaka-btn"
      :class="classes"
      :disabled="disabled"
      v-bind="$attrs"
    >
      <span v-if="loading" class="shaka-btn-loading">
        <svg class="icon load-logo">
          <use :xlink:href="`#icon-${loadingColor}`"></use>
        </svg>
      </span>
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
export default {
  name: "ShakaButton",
  inheritAttrs: false,
  props: {
    size: {
      // 支持middle 、large、small
      type: String,
      default: "middle",
    },
    theme: {
      // 支持 warn、danger、normal、default
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    shape: {
      //支持 square、round 两种类型，默认是square
      type: String,
      default: "square",
    },
    loading: {
      // 支持加载
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { size, theme, shape } = props;
    const classes = computed(() => {
      return {
        [`shaka-btn-size-${size}`]: size,
        [`shaka-btn-${theme}`]: theme,
        [`shaka-btn-shape-${shape}`]: shape,
      };
    });
    const loadingColor = computed(() => {
      let loadingsrc = "loading";
      if (theme !== "default") {
        loadingsrc = "loading-light";
      }
      return loadingsrc;
    });
    return { classes, loadingColor };
  },
};
</script>

<style lang="scss">
$shaka-btn-clr-norm: white;
$shaka-btn-clr-black: #000;

$shaka-btn-border-default: #969799;

$shaka-btn-bclr-default: #fff;
$shaka-btn-bclr-danger: #ee0a24;
$shaka-btn-bclr-warn: #ff976a;
$shaka-btn-bclr-norm: #036c86;

$shaka-btn-border: 1px;
$shaka-btn-border-radius: 50%;

$shaka-btn-padding-md: 14px;
$shaka-font-size-md: 14px;
$shaka-btn-h-md: 42px;

$shaka-font-size-lg: 16px;
$shaka-btn-h-lg: 50px;
$shaka-btn-padding-lg: 16px;

$shaka-font-size-sm: 12px;
$shaka-btn-h-sm: 34px;
$shaka-btn-padding-sm: 12px;
.shaka-btn {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  color: $shaka-btn-clr-norm;
  &:hover,
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.shaka-btn-size-middle {
    height: $shaka-btn-h-md;
    padding: 0px $shaka-btn-padding-md;
    font-size: $shaka-font-size-md;
    &.shaka-btn-shape-round {
      border-radius: $shaka-btn-h-md/2;
    }
  }
  &.shaka-btn-size-large {
    height: $shaka-btn-h-lg;
    padding: 0px $shaka-btn-padding-lg;
    font-size: $shaka-font-size-lg;
    &.shaka-btn-shape-round {
      border-radius: $shaka-btn-h-lg/2;
    }
  }
  &.shaka-btn-size-small {
    height: $shaka-btn-h-sm;
    padding: 0px $shaka-btn-padding-sm;
    font-size: $shaka-font-size-sm;
    &.shaka-btn-shape-round {
      border-radius: $shaka-btn-h-sm/2;
    }
  }
  &.shaka-btn-warn {
    background-color: $shaka-btn-bclr-warn;
    border: $shaka-btn-border solid $shaka-btn-bclr-warn;
    &:hover,
    &:focus {
      background-color: darken(#ff976a, 0.1);
      border-color: darken(#ff976a, 0.1);
    }
  }
  &.shaka-btn-danger {
    background-color: $shaka-btn-bclr-danger;
    border: $shaka-btn-border solid $shaka-btn-bclr-danger;
    &:hover,
    &:focus {
      background-color: darken(#ee0a24, 0.1);
      border-color: darken(#ee0a24, 0.1);
    }
  }
  &.shaka-btn-normal {
    background-color: $shaka-btn-bclr-norm;
    border: $shaka-btn-border solid $shaka-btn-bclr-norm;
    &:hover,
    &:focus {
      background-color: darken(#1687a7, 0.1);
      border-color: darken(#1687a7, 0.1);
    }
  }
  &.shaka-btn-default {
    background-color: $shaka-btn-bclr-default;
    border: $shaka-btn-border solid $shaka-btn-border-default;
    color: $shaka-btn-clr-black;
    &:hover,
    &:focus {
      background-color: darken($shaka-btn-bclr-default, 0.1);
      border-color: darken($shaka-btn-border-default, 0.1);
    }
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.shaka-btn-shape-square {
    border-radius: 0px;
  }
  > .shaka-btn-loading {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 4px;
    background-color: inherit;
    animation: shaka-btn-loading 1.2s infinite linear;
    > .load-logo {
      width: 100%;
      height: 100%;
    }
  }
}
@keyframes shaka-btn-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
