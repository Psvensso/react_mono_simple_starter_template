import React from "react";
import ReactDOM from "react-dom";
import { libOneTestDeepExportExample } from "@namespace/lib1";
ReactDOM.render(React.createElement("div", null,
    React.createElement("p", null,
        "Hello ",
        libOneTestDeepExportExample),
    React.createElement("br", null),
    "Lib 2 export via lib 1:"), document.getElementById("root"));
//# sourceMappingURL=index.js.map