import * as React from "react";
import App from "./components/App";
import {createRoot} from "react-dom/client";
import EventProvider from "./components/Provider";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <App/>
);
