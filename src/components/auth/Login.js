import React, { useRef } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import "../Commonplace.css"


export const Login = () => {
  const username = useRef()
  const password = useRef()
  const invalidDialog = useRef()
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()

    // Post log in to database and set token in local storage
    return fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value
      })
    })
      .then(res => res.json())
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("lu_token", res.token)
          history.push("/")
        }
        else {
          invalidDialog.current.showModal()
        }
      })
  }

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
      </dialog>
      <Container>

        <Form className="text-center">
          <h2 className="page_title"> Commonplace </h2>

          <Form.Group className="mb-3">
            <Form.Control ref={username} type="username" id="username" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control ref={password} type="password" id="password" placeholder="Password" />
          </Form.Group>
          <Button variant="dark" type="submit" onClick={handleLogin}>
            Log In
          </Button>
        </Form>
      </Container>
      <div className="text-center">
        <Link className="form_link" to="/register">Not a member yet?</Link>
      </div>
    </main>
  )
}
