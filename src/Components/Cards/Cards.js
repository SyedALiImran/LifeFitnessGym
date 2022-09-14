import "./Style.css";

//-- bootstrap
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


// -- card data object 
import {programs} from '../Cards/objects'

const Cards = () => {
  return (
    <>
    <div className="container mns">
      <div className="cards_parent">
    <div className="carddd">
      <h2>Programs</h2>
      <div className="row aptDe">
      
      { programs.map((program,key)=>{
          return(
        <div className="col-lg-3 col-md-4 aptDe " key={key} >
        <div className="card" >
        <img className="card-img-top" src={program.image} alt="gym" />
        <div className="card-body">
          <h5 className="card-title">{program.programName}</h5>
          <p className="card-text">
            {program.detail}
          </p>
            <button className="btn btn-primary form-control subCriptnBtn">Subscription</button>
        </div>
      </div>
        </div>

          )
       })}

      </div>
    </div>
    </div>
    </div>
      
    </>
  );
};

export default Cards;
