/// <reference path="shims-vue.d.ts"/>

import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import ButtonDemo from "./components/Demo/ButtonDemo.vue";
import SwitchDemo from './components/Demo/SwitchDemo.vue';
import DialogDemo from "./components/Demo/DialogDemo.vue";
import TabsDemo from "./components/Demo/TabsDemo.vue";
import Markdown from './components/Markdown.vue';
import { h } from "vue";

const history = createWebHashHistory();
const md = filename => h(Markdown, {path:`../markdown/${filename}.md`, key:filename})
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "button", component: ButtonDemo },
        { path: "switch", component: SwitchDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "intro", component: md('intro') },
        { path: "get-start", component: md('getStart') },
        { path: "install", component: md('install') },
      ],
    },
  ],
});
