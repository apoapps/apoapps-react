import { Switch, Route, HashRouter as Router } from "react-router-dom";

import HomePage from "./Pages/HomePage.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import MaterialNavbar from "../src/Components/Navbar.jsx";
import AboutProduct from "./Pages/AboutProduct.jsx";
import Page404 from "./Pages/404.jsx";
import MediaPage from "./Pages/MediaPage.jsx";
//import ForYouPage from "./Pages/OutOfContext/ForYou.jsx";
import MediumPostsPage from "./Pages/MediumPosts.jsx";

import "./App.css";
import "./Assets/Logos/TrigoMathLogo.webp";
import virusLogo from "./Assets/Logos/alexvsviruslogo.png";
import melloLogo from "./Assets/Logos/melloLogo.png";
import wakeupLogo from "./Assets/Logos/wakeup_logo.png";

export default function app() {
  return (
    <Router>
      <header>
        <MaterialNavbar />
      </header>
      <Switch>
        <Route exact path="/404" component={Page404}>
          <Page404 />
        </Route>

        {/* principal paths */}

        <Route exact path="/" component={HomePage}>
          <HomePage />
        </Route>
        <Route exact path="/apoapps-react" component={HomePage}>
          <HomePage />
        </Route>
        <Route exact path="/articles" component={MediumPostsPage}>
          <MediumPostsPage />
        </Route>
        <Route exact path="/me" component={AboutMe}>
          <AboutMe />
        </Route>
        <Route exact path="/media" component={AboutMe}>
          <MediaPage />
        </Route>

        {/* components : */}

        <Route exact path="/fisik">
          <AboutProduct
            imgURL="https://is3-ssl.mzstatic.com/image/thumb/Purple125/v4/51/65/6f/51656f75-28d5-c66a-0d1a-2324f9c2b85c/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/200x200bb.png"
            title="Fisik"
            titleImage=""
            description="Haz tu tarea de Fisica de una manera mucho mas sencilla!!"
            appState="Stable"
            appStore="https://apps.apple.com/ar/app/fisik/id1567364326"
            playStore="https://play.google.com/store/apps/details?id=com.apodapps.fisik_project&hl=en&gl=us"
          />
        </Route>

        <Route exact path="/wakeup">
          <AboutProduct
            imgURL={wakeupLogo}
            title="Title"
            titleImage=""
            description="¿Estás harto de despertarte con sensación de cansancio? Con WakeUp, podrás despedirte de la fatiga matutina y darle la bienvenida a un comienzo de día fresco y lleno de energía. Nuestra aplicación calcula las horas óptimas para despertarte y dormir, para que puedas aprovechar al máximo cada día. Olvida las noches de insomnio y despiértate descansado y renovado con WakeUp."
            appState="Stable"
            appStore="https://apps.apple.com/us/app/wakeup-the-sleep-calculator/id1593359716"
            playStore="https://play.google.com/store/apps/details?id=com.apodapps.wakeup&hl=es&gl=US"
          />
        </Route>

        <Route exact path="/tri-go-math">
          <AboutProduct
            imgURL="https://play-lh.googleusercontent.com/ilouuYQ_h6BCwtW6yDiXk_pFfKNn0CEQjxmngtFxT48_TN-Fe7ZVuos0iVEiFHpAGQ=s180-rw"
            title="Tri-Go Math"
            titleImage=""
            description="Herramienta para estudiantes, la cual ayuda a realizar su tarea de matematicas de una manera sencilla"
            appState="Beta"
            appStore="https://apps.apple.com/es/app/tri-go-math/id1525513476"
            playStore="https://play.google.com/store/apps/details?id=com.apodaca.math_helper&hl=en_US&gl=US"
          />
        </Route>

        <Route exact path="/mello-vs-school">
          <AboutProduct
            imgURL={melloLogo}
            title="Mello Vs School"
            titleImage=""
            description="Videojuego para iOS y android que trata de esquivar cosas de las clases en linea :)"
            appState="Alpha"
            appStore="https://apps.apple.com/us/app/mello-vs-school/id1547529529"
            playStore="https://play.google.com/store/apps/details?id=com.apodapps.taskLoop"
          />
        </Route>

        <Route exact path="/endless-beats">
          <AboutProduct
            imgURL="https://play-lh.googleusercontent.com/aynFiHgvTqoWPgQ5LB81d8WqrRkVgzbhiFheiEC--IcO6evRpcFt--e7HAK2g9i6OU6j=s180-rw"
            title="Endless Beats"
            titleImage=""
            description="Videojuego ritmico, en el cual consiste en esquivar hexagonos y subir de nivel, tiene personajes desbloqueables"
            appState="Alpha"
            appStore="https://apps.apple.com/us/app/endless-beats/id1524127084"
            playStore="https://play.google.com/store/apps/details?id=com.apodaca.game&hl=es"
          />
        </Route>
        <Route exact path="/alex-vs-virus">
          <AboutProduct
            imgURL={virusLogo}
            title="Alex vs virus"
            titleImage=""
            description="Videojuego el cual consiste en esquivar virus y tener el mayor puntaje posible"
            appState="Early access"
            appStore="#/404"
            playStore="https://play.google.com/store/apps/details?id=com.apodaca.app&hl=en&gl=US"
          />
        </Route>

        {/* IOS APP ROUTES */}
        <Route exact path="/mello-vs-school-ios">
          <AboutProduct
            imgURL={melloLogo}
            title="Mello Vs School"
            titleImage=""
            description="Videojuego para iOS y android que trata de esquivar cosas de las clases en linea :)"
            appState="Alpha"
            appStore="https://apps.apple.com/us/app/mello-vs-school/id1547529529"
          />
        </Route>
      </Switch>
    </Router>
  );
}
