import React from "react";
//import ReactDOM from "react-dom"; // ver.17
import ReactDOM from "react-dom/client"; // vewr.18
// import "./index.css";

// //  in JS
// const div = document.createElement("div");

//const root = document.getElementById("root"); // JS & React
// //console.log(root);
// root.append(div);
// //

// in React
const div = React.createElement("div");

console.log("div :>> ", div);

//ReactDOM.render(div, root); // ver.17
//ReactDOM.createRoot(root).render(div); // ver/18
ReactDOM.createRoot(document.getElementById("root")).render(div); // ver/18

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
