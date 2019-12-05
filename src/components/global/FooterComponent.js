import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterComponent = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol>
            <ul>
              <li className="list-unstyled">
                <a href="who">¿Quiénes Somos?</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul>
              <li className="list-unstyled">
                <a href="terminos">Términos y Condiciones</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul>
              <li className="list-unstyled">
                <a href="privacy">Aviso de Privacidad</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul>
              <li className="list-unstyled">
                <a href="contact">Contáctanos</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/AerobotPlanet/" class="fa fa-facebook">Facebook</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/channel/UCM_jToFCXMvhOcrvBzGqKAA" class="fa fa-youtube">Youtube</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <ul>
              <li className="list-unstyled">
                <a href="https://mx.linkedin.com/company/aerobotplanet" class="fa fa-linkedin">LinkedIn</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()}   : <a href="https://www.aerobotplanet.com"> Aerobot Planet </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterComponent;

