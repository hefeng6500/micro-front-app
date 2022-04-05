import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";
let root;
function render(props) {
  let { container } = props;

  container = container ? container.getElementById("root") : document.getElementById("root");
  root = createRoot(container);

  root.render(
    <BrowserRouter basename={BASE_NAME}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {}
export async function mount(props) {
  console.log("mount", props);
  render(props);
}
export async function unmount() {
  root.unmount();
}

export async function update(props) {
  console.log("update props", props);
}
