import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Import Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import font awoasme
import "@/assets/fontawesome-free-6.4.2-web/css/all.css";

// Set up the app
const app = createApp(App);
app.use(router);

// Set up Bootstrap
// app.use(BootstrapVue);
// app.use(IconsPlugin);

// Mount the app
app.mount("#app");
