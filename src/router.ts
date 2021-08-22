/// <reference path="shims-vue.d.ts"/>

import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import ButtonDemo from "./components/Demo/ButtonDemo.vue";
import SwitchDemo from "./components/Demo/SwitchDemo.vue";
import DialogDemo from "./components/Demo/DialogDemo.vue";
import TabsDemo from "./components/Demo/TabsDemo.vue";
import Intro from './views/Intro.vue';
import Install from './views/Install.vue';
import GetStart from './views/GetStart.vue';

const history = createWebHashHistory();
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
        { path: "intro", component: Intro },
        { path: "get-start", component: GetStart },
        { path: "install", component: Install },
      ],
    },
  ],
});
