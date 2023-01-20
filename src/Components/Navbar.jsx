import "./styles/Navbar.css";
import logo from "../Assets/Logos/tiny-apoapps-logo.svg";


function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light">


      <img
        className="brand__logo "
        src={logo}
        width="50px"
        height="50px"
        alt="Logo principal"

      />


      <h3 id="nav-logo"><a href="#/">ApoApps</a></h3>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
        aria-expanded="true"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ">
          <li className="nav-item  " >
            <a className="nav-link" href="#/me">
              Acerca del creador
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#/media">
              Media
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#/articles">
              Artículos
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavBar;


