import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; eCommerce Store&nbsp;&ndash;&nbsp;
            <span>
              <a
                href="https://creativeDev.pro"
                target="_blank"
                rel="noreferrer"
              >
                by CreativeDev
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
