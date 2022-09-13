import "./Style.css";

//-- bootstrap
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cards = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://lmimirror3pvr.azureedge.net/static/media/13608/6515fa3c-603e-439b-ab6d-7a30f8e1008b/most-popular-classes-new-webpage-article-thumbnail-850x520.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Cards;
