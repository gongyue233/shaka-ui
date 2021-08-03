<template>
  <div class="shaka-dialog-overlay"></div>
  <div class="shaka-dialog-wrapper">
    <div class="shaka-dialog">
      <header>提示框标题</header>
      <main>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</main>
      <footer>
        <shaka-button>取消</shaka-button>
        <shaka-button theme="normal">确定</shaka-button>
      </footer>
    </div>
  </div>
</template>

<script>
import ShakaButton from "./ShakaButton.vue";
export default {
  name: "ShakaDialog",
  components: { ShakaButton },
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
      text-align: left;
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
