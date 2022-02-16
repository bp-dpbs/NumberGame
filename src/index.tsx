import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { NavigationPanel } from "./features/common/NavigationPanel";
import { store } from "./store/rootStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NumberPanel } from "./features/numberPanel/NumberPanel";
import { Home } from "./features/home/Home.jsx";

ReactDOM.render(
  <Provider store={store}>
    <NavigationPanel />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<NumberPanel />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
