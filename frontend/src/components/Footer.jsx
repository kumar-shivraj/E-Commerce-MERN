import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Proshop {currentYear}"
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
