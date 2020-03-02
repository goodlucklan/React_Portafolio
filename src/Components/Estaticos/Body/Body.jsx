import React, { Component } from "react";
import Hero from "../../../img/anzu-ng.png";
import GoodLuck from "../../../img/Me.jpg"
import "./Body.css";
class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="banner-area">
          <div className="container">
            <div className="div-texto">
              <div>
                <h1 className="name-h1">Luis Roman</h1>
                <h3 className="name-h3">
                  Desarrollador Web y Co-Fundador de Anzu Esports
                </h3>
                <p>
                  Que tal, mi nombre es Luis Roman, actualmente me dedico al
                  desarrollo web y tambien a administrar mi propio proyecto
                  llamado Anzu Esports, donde apostamos por el competitivo de
                  League of Legends en Peru. La parte de navegacion a tu lado
                  izquierdo puedes revisar mis repositorios y mi contacto, a su
                  vez tambien de mi linkedin para futuros proyectos. Dale click
                  aqui abajo para ver el instagram del proyecto que te acabo de
                  mencionar
                </p>
              </div>
              <div className="div-imagen">
                <a href="/" className="btn btn-white btn-animation-1">
                  Click Aqui
                </a>
              </div>
              <div className="div-imagen2">
                <img className="img-fluid" src={Hero} alt="" />
                <img src={GoodLuck} alt=""/>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Body;
