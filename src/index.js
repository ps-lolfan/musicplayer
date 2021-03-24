import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import ApolloProvider from "./ApolloProvider";
ReactDOM.render(ApolloProvider, document.getElementById("root"));
