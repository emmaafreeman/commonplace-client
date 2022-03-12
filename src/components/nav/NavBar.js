import React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export const NavBar = () => {
  const history = useHistory()
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="d-flex justify-content-center">
      <Container className="d-flex justify-content-center">
        <Nav.Link className="text-white" href="/">Commonplace</Nav.Link>
        <NavDropdown title="Add" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" href="/entries/add">Entry</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" href="/topics">Topic</NavDropdown.Item>
        </NavDropdown>
        {
          (localStorage.getItem("lu_token") !== null) ?
            <li className="nav-item">
              <button className="nav-link fakeLink"
                onClick={() => {
                  localStorage.removeItem("lu_token")
                  history.push({ pathname: "/" })
                }}
              >Logout</button>
            </li> :
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
        }
      </Container>
    </Navbar>
  )

  // const history = useHistory()
  // return (
  //   <ul className="navbar">
  //     <li className="navbar__item">
  //       <button className="nav-link fakeLink"
  //         onClick={() => {
  //           history.push({ pathname: "/" })
  //         }}>Games</button>
  //     </li>
  //     <li className="navbar__item">
  //       <button className="nav-link fakeLink"
  //         onClick={() => {
  //           history.push({ pathname: "/events" })
  //         }}>Events</button>
  //     </li>
  //     <li className="navbar__item">
  //       <button className="nav-link fakeLink"
  //         onClick={() => {
  //           history.push({ pathname: "/profile" })
  //         }}>Profile</button>
  //     </li>
  //     {
  //       (localStorage.getItem("lu_token") !== null) ?
  //         <li className="nav-item">
  //           <button className="nav-link fakeLink"
  //             onClick={() => {
  //               localStorage.removeItem("lu_token")
  //               history.push({ pathname: "/" })
  //             }}
  //           >Logout</button>
  //         </li> :
  //         <>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/login">Login</Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/register">Register</Link>
  //           </li>
  //         </>
  //     }
  //   </ul>
  // )
}
