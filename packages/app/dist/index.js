import React from "react";
import ReactDOM from "react-dom";
import { libOneTestDeepExportExample, lib2test } from "@namespace/lib1";
ReactDOM.render(React.createElement("div", null,
    React.createElement("p", null,
        "Hello ",
        libOneTestDeepExportExample),
    React.createElement("br", null),
    "Lib 2 export via lib 1: ",
    lib2test), document.getElementById("root"));
//# sourceMappingURL=index.js.map