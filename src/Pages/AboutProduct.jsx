import "./styles/AboutProduct.css";
import { OS, currentBrowser } from '../Functions/DetectOS';

function AboutProduct(props) {
  return (
    <div className=" container ">
      
      <div className="row ">
        <div className="col-md-5 col-lg-4  card mx-auto  shadow-card ">
          <div className="card-body ">
            <img
              src={props.imgURL}
              alt="apoapps software"
              className="software-image container card-img-top"
            />
            <h1 className="card-title">{props.title}</h1>
            <h4 className="card-text">{props.appState}</h4>
          </div>
        </div>
        <div className="col-md-6 col-lg-7  card  shadow-card">
          <div className="card-body">
            <div className="card-body">
              <h4 className="card-title">About Product:</h4>
              <p className="card-text">{props.description}</p>
              <a href={props.appStore} className='btn btn-dark button' >Download iOS</a>
              <br/>
              { props.playStore != null?  <a href={props.playStore}  className='btn btn-dark button' >Download Android</a> : <div></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
