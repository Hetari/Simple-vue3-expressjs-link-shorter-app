import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import fontawesome
import "@/assets/fontawesome-free-6.4.2-web/css/all.css";

// import css
import "@/assets/main.css";

// Set up the app
const app = createApp(App);
app.use(router);

// Set up Bootstrap
// app.use(BootstrapVue);
// app.use(IconsPlugin);

// Mount the app
app.mount("#app");
