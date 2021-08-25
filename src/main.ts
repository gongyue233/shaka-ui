/// <reference path="shims-vue.d.ts"/>

import "./index.scss";
import "./lib/shaka.scss";
import { createApp } from "vue";
import App from "./App.vue";
import 'github-markdown-css';
import { router } from "./router";

const app = createApp(App);
app.use(router);
app.mount('#app');
