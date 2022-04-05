import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

let app

function render(props) {
  const { container } = props;

  app = createApp(App)
  app.use(store)
  app.use(router)
  app.mount(container ? container.querySelector("#app") : "#app");
}

if (window.__POWERED_BY_QIANKUN__) {
  /* eslint-disable */
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {}

export async function mount(props) {
  render(props);
}
export async function unmount() {
  app.unmount();
}
