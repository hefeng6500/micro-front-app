import { createApp } from 'vue'
import { registerMicroApps, start } from "qiankun";
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

function render() {
  createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

  // 加载微应用
  registerMicroApps([
    {
      name: "reactApp",
      entry: "//localhost:3000",
      container: "#react",
      activeRule: "/react",
      props: {
        slogan: "Hello Qiankun",
      },
    },
    {
      name: "vueApp",
      entry: "//localhost:9000",
      // entry: {
      //   scripts: ["//localhost:9000"],
      // },
      container: "#vue",
      activeRule: "/vue",
      props: {
        slogan: "Hello Qiankun",
      },
    },
  ]);

  start({
    sandbox: {
      strictStyleIsolation: true
    }
  });
}

render();