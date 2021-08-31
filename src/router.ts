/// <reference path="shims-vue.d.ts"/>

import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import ButtonDemo from "./components/Demo/ButtonDemo.vue";
import SwitchDemo from "./components/Demo/SwitchDemo.vue";
import DialogDemo from "./components/Demo/DialogDemo.vue";
import TabsDemo from "./components/Demo/TabsDemo.vue";
import Markdown from "./components/Markdown.vue";
import intro from "./markdown/intro.md";
import getStart from "./markdown/getStart.md";

import { h } from "vue";

const history = createWebHashHistory();
const md = (filename, keyName) =>
  h(Markdown, { content: filename, key: keyName });
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "button", component: ButtonDemo },
        { path: "switch", component: SwitchDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "intro", component: md(intro, "intro") },
        { path: "get-start", component: md(getStart, "getStart") },
      ],
    },
  ],
});
