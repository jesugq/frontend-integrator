import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterComponent = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="who">¿Quiénes Somos?</a>
              </li>
              <li className="list-unstyled">
                <a href="terminos">Términos y Condiciones</a>
              </li>
              <li className="list-unstyled">
                <a href="frequent">Preguntas Frecuentes</a>
              </li>
              <li className="list-unstyled">
                <a href="contact">Contáctanos</a>
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

