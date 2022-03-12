import React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css"


export const Footer = () => {
    return (
        <div className="footer">
        <Navbar expand="lg" variant="dark" bg="dark" className="footer_nav d-flex justify-content-center position-absolute bottom-0">
            <Container className="d-flex justify-content-center">
              <Navbar.Text>Do I need a footer? IDK</Navbar.Text>
              {/* <TMDBLogo className="footer_image" /> */}
            </Container>
        </Navbar>
        </div>
    )
}
