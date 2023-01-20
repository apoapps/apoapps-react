import { Link } from "react-router-dom";

import "./styles/AboutMe.css";

export default function MediaPage(props) {

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
        {
              !props.hasAbout?
              <div className="col-md-6 info ">
              <h1>Presencia de ApoApps</h1>
              <ul class="list-group">
              <li class="list-group-item">
                  <a href="https://www.facebook.com/ApoApps/">Facebook</a>
                </li>
                <li class="list-group-item">
                  <a href="https://www.youtube.com/channel/UC-LPXAK9zMiCOCWMZiO23tA">
                    Youtube
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="https://www.github.com/alexlink2004">Github</a>
                </li>
                <li class="list-group-item">
                  <a href="https://vm.tiktok.com/ZMJwQcnad/">TikTok</a>
                </li>
              </ul>
            </div>: <div></div>
          }
          <div className={!props.hasAbout? "col-md-6 info": "col-md-10"}>
              
            <h1 className="">¿Que es apoapps?</h1>
            <h4>
              ApoApps es una empresa independiente creada por 
              {<Link to="/me"> Alejandro Apodaca Cordova </Link>}, creando soluciones y entretenimiento para la vida diaria de las personas.
              <p>
              Actualmente tenemos presencia en las tiendas Google play, Huawei App Gallery y Apple App Store, checa nuestros ultimos lanzamientos
              </p>
            </h4>
            <p></p>
            <br/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
