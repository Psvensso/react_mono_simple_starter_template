import React from "react";
import ReactDOM from "react-dom";
import { libOneTestDeepExportExample } from "@namespace/lib1";

ReactDOM.render(
  <div>
    <p>Hello {libOneTestDeepExportExample}</p>
    <br />
  </div>,
  document.getElementById("root")
);
