<<<<<<< HEAD
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
=======
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
>>>>>>> feature/Duy2

const Footer = () => {
  return (
    <Container>
<<<<<<< HEAD
      {" "}
=======
      {' '}
>>>>>>> feature/Duy2
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="8">
              <h5 className="title">Tech Store</h5>
              <p>Chất lượng làm nên thương hiệu và sự uy tín</p>
            </MDBCol>
            <MDBCol md="">
              <h5 className="title">Liên kết</h5>
              <ul>
                <li className="list-unstyled">
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i> Đăng nhập
                    </Nav.Link>
                  </LinkContainer>
                </li>
                <li className="list-unstyled">
                  <LinkContainer to="/cart">
                    <Nav.Link>
                      <i className="fa fa-briefcase"></i> Giỏ hàng
                    </Nav.Link>
                  </LinkContainer>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
<<<<<<< HEAD
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://duytruong23.github.io/myportfolio/">
              {" "}
              Vua Hai Tac{" "}
=======
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a href="https://duytruong23.github.io/myportfolio/">
              {' '}
              Vua Hai Tac{' '}
>>>>>>> feature/Duy2
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </Container>
  );
};

export default Footer;
