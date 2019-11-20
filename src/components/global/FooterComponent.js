import React from 'react';
import { MDBContainer, MDBFooter } from 'mdbreact';

const FooterComponent = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        Footer to be replaced!
      </MDBContainer>
      <MDBContainer fluid className="footer-copyright text-center py-3">
        Footer to be replaced!
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterComponent;