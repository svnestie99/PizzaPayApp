import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { store } from "./Store/store";

const rootElement = document.getElementById("root");

let rerender = (state) => {
  ReactDOM.render(
    <StrictMode>
      <App store={store} />
    </StrictMode>,
    rootElement
  );
};
rerender(store);
store.subscribe(rerender);
