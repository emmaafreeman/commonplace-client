import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router} from "react-router-dom"
import { Commonplace } from "./components/Commonplace.js"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Commonplace />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
