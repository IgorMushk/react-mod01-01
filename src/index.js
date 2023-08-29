import React from "react";
//import ReactDOM from "react-dom"; // ver.17
import ReactDOM from "react-dom/client"; // vewr.18
// import "./index.css";

// //  in JS
// const div = document.createElement("div");
// div.id = "somw-ID";
// div.classList = "test-class";

// const p = document.createElement("p");
// p.textContent = " I am P";
// div.append(p);

//const root = document.getElementById("root"); // JS & React
// //console.log(root);
// root.append(div);
// //

//const paragraph = React.createElement("p", { id: "test-P-Id", children: ["I am P"] });

const p = <p id="test=Id">I am P</p>;

// in React
// const div = React.createElement(
//   "div",
//   { name: "main", id: "test-Id", className: "test-class" },
//   "Hello",
//   "React",
//   "from",
//   "UK"
// );

// const div = React.createElement("div", {
//   name: "main",
//   id: "test-Id",
//   className: "test-class",
//   //children: ["Hello", " ", "React ", "from", " UK"],
//   //children: paragraph,
//   children: p,
// });

const div = (
  <div name="main" id="test-Id" className="test-class">
    {p}
  </div>
);

console.log("div :>> ", div);

//ReactDOM.render(div, root); // ver.17
//ReactDOM.createRoot(root).render(div); // ver/18
ReactDOM.createRoot(document.getElementById("root")).render(div); // ver/18

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
