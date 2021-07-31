/// <reference path="shims-vue.d.ts"/>

import { createApp } from "vue";
import "./index.scss";
import "./lib/shaka.scss";
import App from "./App.vue";

import { router } from "./router";


const app = createApp(App);
app.use(router);
app.mount('#app');
