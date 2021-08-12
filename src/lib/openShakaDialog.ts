/// <reference path="../shims-vue.d.ts"/>

import { createApp, h } from "vue";

import ShakaDialog from "./ShakaDialog.vue";
const openShakaDialog = (options) => {
  const { title, content, ok, cancel, closeOnClickOverlay, visible } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        ShakaDialog,
        {
          visible: true,
          "onUpdate:visible": (newValue) => {
            if (newValue === false) {
              //@ts-ignore
              app.unmount(div);
              div.remove();
            }
          },
          title,
          ok,
          cancel,
          closeOnClickOverlay,
        },
        {
          content,
        }
      );
    },
  });
  app.mount(div);
};
export default openShakaDialog;
