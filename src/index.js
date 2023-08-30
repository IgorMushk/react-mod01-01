import React from "react";
//import ReactDOM from "react-dom"; // ver.17
import ReactDOM from "react-dom/client"; // vewr.18
// import "./index.css";
//-import data from "./data.json";
import { Card } from "./components/Card";

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

//-const p = <p id="test=Id">I am P</p>;

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

//- const div = (
//-   <div name="main" id="test-Id" className="test-class">
//-     {p}
//-   </div>
//- );
//-console.log("div :>> ", div);

// const Head = () => {
//   return <p>I am Head</p>;
// };

// const head = (clas, id) => {
//   console.log("clas :>>", clas);
//   return (
//     <p id={id} className={clas}>
//       I am Head
//     </p>
//   );
// };

// const head = (obj) => {
//   console.log("obj :>>", obj);
//   return (
//     <p id={obj.id} className={obj.clas}>
//       I am Head
//     </p>
//   );
// };

// const Head = ({ clas, id }) => {
//   //console.log("props :>>", props);
//   return (
//     <p id={id} className={clas}>
//       I am Head
//     </p>
//   );
// };

// fom Bootstap (https://getbootstrap.com/docs/5.3/components/card/)
// const Card = () => {
//   return data.map((photo) => {
//     return (
//       <div key={photo.id} className="card mx-auto my-2" style={{ width: "18rem" }}>
//         <img src={photo.url} className="card-img-top" alt={photo.title} />
//         <div className="card-body">
//           <h5 className="card-title">Card title: {photo.title}</h5>
//           {/* <p className="card-text">
//             Some quick example text to build on the card title and make up the bulk of the card's content.
//           </p> */}
//           {/* {head()} */}
//           {/* {head("card-title", "id-123")} */}
//           {/* {head({ id: "id-123", clas: "card-title" })} */}
//           <Head id="id-123" clas="card-title" />
//           <a href="#" class="btn btn-primary">
//             Go somewhere
//           </a>
//         </div>
//       </div>
//     );
//   });
// };
//console.log("card :>>", card);

//ReactDOM.render(div, root); // ver.17
//ReactDOM.createRoot(root).render(div); // ver/18
//////ReactDOM.createRoot(document.getElementById("root")).render(<Card />); // ver/18

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);

//// Пример из Модуля 1
const favoriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => {
  console.log(books);
  return (
    <ul>
      {books.map((book) => (
        <li>{book.name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <BookList books={favoriteBooks} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
