/// <reference path="shims-vue.d.ts"/>

import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Doc from "./components/Doc.vue";
import ButtonDemo from './components/Demo/ButtonDemo.vue';
import SwitchDemo from './components/Demo/SwitchDemo.vue';
import DialogDemo from './components/Demo/DialogDemo.vue';


const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    { path: "/doc", component: Doc, children: [
      {path: "button", component: ButtonDemo},
      {path: "switch", component: SwitchDemo},
      {path: "dialog", component: DialogDemo},
    ]},
  ],
});
