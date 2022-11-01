import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";

// import { type I18n, createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import "./style/index.scss";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(ElementPlus);
app.mount("#app");
