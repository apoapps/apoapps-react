import heart from '../../Assets/outOfContext/heart.svg';

export default function ForYou (props){

    return(
        <div className="main container-fluid">
            <div className="row">
                <div className="col-md-6 ">
                    <img src={heart} alt="love img" width="300px" height="300px"/>
                </div>
                <div className="col-md-6">
                    <h1>Si te sientes mal</h1>
                    Recuerda que aqui estoy para cualquier cosa, aqui no falta el cariño ni el amor, recuerda que eres una persona 
                    increible que vale demasiado{'<3'}.
                    <br></br>
                    Programaria una futura vida a tu lado.
                    <br></br>
                    Te mando un fuerte abrazo y un beso.

                    <br></br>
                    <br></br>
                    <strong>ich liebe dich</strong>
                    <br></br>
                    <code>
                      { " Future<bool> futureWithYou ()=> true;"}
                    </code>
                   
                </div>
            </div>
        </div>
    );
}