import React from "react";
import ReactDOM from "react-dom";
import { libOneTestDeepExportExample, lib2test } from "@namespace/lib1";

ReactDOM.render(
  <div>
    <p>Hello {libOneTestDeepExportExample}</p>
    <br />
    Lib 2 export via lib 1: {lib2test}
  </div>,
  document.getElementById("root")
);
