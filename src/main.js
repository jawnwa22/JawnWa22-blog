import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import '@/api/index';
import util from "@/util/util.js";
import store from './store'


Vue.config.productionTip = false;
Vue.prototype.util = util; // 公用方法

router.beforeEach((to, from, next) => {
    // store.commit('updateProgress', 0);
    next();
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
