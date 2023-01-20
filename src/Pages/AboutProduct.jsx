import "./styles/AboutProduct.css";
import { OS, currentBrowser } from '../Functions/DetectOS';

function AboutProduct(props) {
  return (
    <div className=" container-fluid ">
      
      <div className="row ">
        <div className="col-md-5 col-lg-4 card mx-auto shadow-card">
          <div className="card-body">
            <img
              src={props.imgURL}
              alt="apoapps software"
              className="software-image container-fluid card-img-top"
            />
            <h1 className="card-title">{props.title}</h1>
            <h3 className="card-text">{props.appState}</h3>
          </div>
        </div>
        <div className="col-md-6 col-lg-7 card shadow-card">
          <div className="card-body">
            <div className="card-body">
              <h4 className="card-title"> Acerca del programa:</h4>
              <p className="card-text">{props.description}</p>
              <a href={props.appStore} className='btn btn-dark button' >Descargar iOS</a>
              <br/>
              { props.playStore != null?  <a href={props.playStore}  className='btn btn-dark button' >Descargar android</a> : <div></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
