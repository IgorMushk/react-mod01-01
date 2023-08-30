import data from "../data.json";
import { Head } from "./Head";

export const Card = () => {
  return data.map((photo) => {
    return (
      <div key={photo.id} className="card mx-auto my-2" style={{ width: "18rem" }}>
        <img src={photo.url} className="card-img-top" alt={photo.title} />
        <div className="card-body">
          <h5 className="card-title">Card title: {photo.title}</h5>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p> */}
          {/* {head()} */}
          {/* {head("card-title", "id-123")} */}
          {/* {head({ id: "id-123", clas: "card-title" })} */}
          <Head id="id-123" clas="card-title" />
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
};