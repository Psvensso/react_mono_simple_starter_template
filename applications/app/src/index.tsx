import React from "react";
import ReactDOM from "react-dom";
import { libOneTestDeepExportExample } from "@namespace/lib1/lib/example/example";

ReactDOM.render(
  <p>Hello {libOneTestDeepExportExample}</p>,
  document.getElementById("root")
);
