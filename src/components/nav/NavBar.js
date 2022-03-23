import React from "react"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import Button from "react-bootstrap/Button"
import { NavItem } from "react-bootstrap"

export const NavBar = () => {
  const history = useHistory()
  
  // Removes token and then rerenders page to log user out
  const handleLogout = () => {
    localStorage.removeItem("lu_token")
    history.push({ pathname: "/" })
  }

  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center text-white">
        <Nav.Link className="text-white" href="/">Commonplace</Nav.Link>
        <Nav>
          <NavDropdown title="Add">
            <NavDropdown.Item href="/entries/add">Entry</NavDropdown.Item>
            <NavDropdown.Item href="/topics">Topic</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant="dark" type="submit" onClick={handleLogout}>Logout</Button>
      </Container>
    </Navbar>
  )
}
