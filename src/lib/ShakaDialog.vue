<template>
  <template v-if="visible">
    <teleport to='body'> 
    <div class="shaka-dialog-overlay" @click="onClickOverlay"></div>
    <div class="shaka-dialog-wrapper">
      <div class="shaka-dialog">
        <header>
          {{title}}
          <img src="src/assets/closed.svg" alt="" @click="close" />
        </header>
        <main>
          <slot name="content" />
        </main>
        <footer>
          <shaka-button @click="cancel">取消</shaka-button>
          <shaka-button theme="normal" @click="ok">确定</shaka-button>
        </footer>
      </div>
    </div>
    </teleport>
  </template>
</template>

<script>
import ShakaButton from "./ShakaButton.vue";
export default {
  name: "ShakaDialog",
  components: { ShakaButton },
  props: {
    //支持 visible ，默认为 false
    visible: {
      type: Boolean,
      default: false,
    },
    // closeOnClickOverlay代表点击 黑色遮罩层 就关闭Dialog组件。默认值是true
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    // 支持 ok 和 cancel 函数传入
    ok: {   
      type: Function,
    },
    cancel: {
      type: Function,
    },
    // 标题，内容通过插槽得到
    title:{
      type: String,
      default:'标题'
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", !props.visible);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      if (props.cancel?.() !== false) {
        close();
      }
    };
    return { close, onClickOverlay, ok, cancel };
  },
};
</script>

<style lang="scss">
$shaka-dialog-border: #f0f0f0;
.shaka-dialog-overlay {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: fade-out(rgba(0, 0, 0, 0.7), 0.5);
}
.shaka-dialog-wrapper {
  position: fixed;
  z-index: 20;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  > .shaka-dialog {
    background-color: white;
    border-radius: 20px;
    min-width: 15em;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    > header {
      font-size: 16px;
      padding: 26px 16px 16px 26px;
      border-bottom: 1px solid $shaka-dialog-border;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      > img {
        width: 20px;
        height: 20px;
        margin-left: 10px;
      }
    }
    > main {
      word-wrap: break-word;
      font-size: 14px;
      padding: 10px 26px 26px 26px;
      border-bottom: 1px solid $shaka-dialog-border;
      text-align: left;
    }
    > footer {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding: 10px;
      > * {
        margin: 0 10px;
      }
    }
  }
}
</style>
