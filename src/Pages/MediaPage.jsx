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
              <h1>Apoapps presence</h1>
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
              
            <h1 className="">What is ApoApps?</h1>
            <h4>
               <p>ApoApps is an independent project founded and led by {<Link to="/me"> Alejandro Apodaca Cordova </Link>}, dedicated to creating innovative solutions and entertainment that improve people's lives. With a focus on creating apps for both academic and lifestyle needs, Alejandro has developed successful apps like Fisik and Tri-Go Math, which have helped students improve their understanding of physics and math, respectively. Additionally, he has developed WakeUp, an app that leverages advanced sleep cycle calculations to help people wake up refreshed and energized every day. Through his passion for app development, Alejandro is committed to driving positive change and making a meaningful impact on the lives of people around the world.
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
