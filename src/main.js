import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import VueGtag from "vue-gtag";

const app = createApp(App);
app.use(router);
app.use(VueGtag, {
    appName: 'artdom',
    pageTrackerScreenviewEnabled: true,
    config: {
        id: "G-YFWG4Z1ZNX",
    },
    onReady () {
        console.log("ready");
    }
}, router);
app.mount('#app');