import XfInput from "./XFFormInput.vue";
const PageName = {
  // 定义install方法，接收vue作为参数，如果使用use注册插件，则组价都将被注册
  install: function (Vue) {
    Vue.component("XfInput", XfInput);
  },
};
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(PageName);
}
//导出
export default PageName;
