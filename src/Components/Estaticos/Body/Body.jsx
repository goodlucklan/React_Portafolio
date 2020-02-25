import React, { Component } from "react";
import Hero from '../../../img/hero-img.png'
class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <section class="banner-area">
          <div class="container">
            <div class="row fullscreen align-items-center justify-content-between">
              <div class="col-lg-6 col-md-6 banner-left">
                <h6>Hola, que tal</h6>
                <h1>Luis Roman</h1>
                <p>
                    Desarrollador Web con 3 años de experiencia, este es mi portafolio donde veras mis experiencias y tambien proyectos
                    en los que eh estado trabajando, aparte de mi curriculum
                </p>
                <a href="/" class="primary-btn text-uppercase">
                    Click Aqui
                </a>
              </div>
              <div class="col-lg-6 col-md-6 banner-right d-flex align-self-end">
                <img class="img-fluid" src={Hero} alt="" />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Body;
