import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { Container, Form, Button } from "react-bootstrap"


export const Register = () => {
  const firstName = useRef()
  const lastName = useRef()
  const username = useRef()
  const password = useRef()
  const verifyPassword = useRef()
  const passwordDialog = useRef()
  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault()

    // If both password fields match, create newUser object from form values
    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        "username": username.current.value,
        "first_name": firstName.current.value,
        "last_name": lastName.current.value,
        "password": password.current.value
      }

      // Post newUser object to database, then save token to local storage
      return fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
      })
        .then(res => res.json())
        .then(res => {
          if ("token" in res) {
            localStorage.setItem("lu_token", res.token)
            history.push("/")
          }
        })
    } else {
      passwordDialog.current.showModal()
    }
  }

  return (
    <main style={{ textAlign: "center" }}>

      <dialog className="dialog dialog--password" ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
      </dialog>

      <Container>
        <Form className="text-center">
          <h2 className="page_title"> Register </h2>
          <Form.Group className="mb-3">
            <Form.Control ref={firstName} type="text" id="firstName" placeholder="First name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control ref={lastName} type="text" id="lastName" placeholder="Last name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control ref={username} type="text" id="username" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control ref={password} type="text" id="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control ref={verifyPassword} type="text" id="verifyPassword" placeholder="Verify password" />
          </Form.Group>

          <Button variant="dark" type="submit" onClick={handleRegister}>
            Register
          </Button>
        </Form>
      </Container>

      <div className="text-center">
        Already registered? <Link className="form_link" to="/login">Login</Link>
      </div>
    </main>
  )
}
