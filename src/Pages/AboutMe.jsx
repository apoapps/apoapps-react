import "./styles/AboutMe.css";

import profilePic from '../Assets/Logos/pp2.jpeg';

import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className=" container">
      <br />
      <div className="row">
        <div className="col-md mx-auto">
          <img
            src={profilePic}
            alt="Foto de perfil"
            className="profile-picture mx-auto"
          />
          <h1 className="about-title">Alejandro Apodaca Córdova</h1>
        </div>

        <div className="col-md">
          <div className="info ">
            <h1>Contact:</h1>
            <ul class="list-group">
              <li class="list-group-item"><a href="https://vm.tiktok.com/ZMJwQcnad/">Tiktok</a></li>
              <li class="list-group-item"><a href="https://t.me/alexapo26">Telegram</a></li>
              <li class="list-group-item"><a href="https://www.linkedin.com/in/alejandro-apodaca-cordova-502a2b200/">Linkedin</a></li>
              <li class="list-group-item"><a href="https://www.youtube.com/channel/UC-LPXAK9zMiCOCWMZiO23tA">Youtube</a></li>
              <li class="list-group-item"><a href="https://www.github.com/alexlink2004">Github</a></li>

            </ul>
          </div>

          <br />

          <div className="info  ">
            <h4>About me:</h4>
            <h5>
              {/* Estudiante de universidad en la carrera de Ingeniería Mecatrónica con una sólida formación y experiencia en programación y automatización.
              Autodidacta y con una amplia trayectoria en proyectos y concursos de ciencia, destaca por su capacidad para aprender y aplicar nuevas tecnologías de manera eficiente.
              Ha desarrollado dos aplicaciones exitosas que han ayudado a miles de estudiantes en todo el mundo a mejorar sus habilidades en matemáticas y física. */}
              University student in the career of Mechatronics Engineering with a solid background and experience in programming.
              Self-taught and with an extensive track record in science projects and competitions, he stands out for his ability to learn and apply new technologies efficiently.
              He has developed three successful applications that have helped thousands of students around the world improve their homework and lifestyle.
            </h5>
            <a href='https://docs.google.com/document/d/1EpRiiUTYgPA0Vl5XLj0DhceHBYDIbF0OdtQxr4ZwRpw/edit?usp=sharing' class="btn btn-dark" >Download my CV!</a>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default AboutMe;
