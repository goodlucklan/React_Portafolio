import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import about from '../../../img/about-img.png'
import {Link} from 'react-router-dom';
class About extends React.Component {
  render() {
    return (
      <Fade>
        <div className="contanier">
          <p className="text-primary">
            Mi nombre es Luis Roman, Soy Web Developer desde hace unos años
            donde me especializo en JavaScript
          </p>
          <p className="text-primary">
            De momento solo eh estado trabajando en una Api de Pokemon que puedes ver aqui, ya mas adelante pondre a todo publico algunas cosas que tengo pensado, si quieres dejar una sugerencia, dejalo en mi email
            : <span style={{fontSize: '25px'}}>leromanpe@gmail.com</span>
          </p>
        </div>
        <div className="grid">
          <Link to="/Pokemon">
          <div className="card">
            <img
              src={about}
              alt="Avatar"
              style={{ width: "100%" }}
            />
            <div className="contenedor">
              <h4>
                <b>Aplicativo de Pokemon</b>
              </h4>
              <p>Dale click al cuadro para que te lleve</p>
            </div>
          </div>
          </Link>
        </div>
      </Fade>
    );
  }
}
export default About;
