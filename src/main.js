import Vue from "vue";
import App from "./App.vue";
import { Input, Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import PageName from "./package/index";

Vue.use(Input);
Vue.use(PageName);
Vue.config.productionTip = false;
Vue.prototype.$message = Message;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
