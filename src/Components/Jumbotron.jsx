

export default function Jumbotron  (props) {
    return(
        <div className="jumbotron">
  <h1 className="display-4">{props.title}</h1>
    <p className="lead">{props.lead}</p>
  
    <p>{props.text}</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#down-btn" role="button">Descargar ahora!</a>
  </p>
</div>
    );
}