import { lib2test, libOneTestDeepExportExample } from "@namespace/lib1";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <p>Hello {libOneTestDeepExportExample}</p>
        <br />
        Lib 2 export via lib 1: {lib2test}
      </div>
    </div>
  );
}

export default App;
