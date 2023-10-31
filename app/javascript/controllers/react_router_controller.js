import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from 'react-dom'

import App from "../components/App"



// Connects to data-controller="react-router"
export default class extends Controller {
  connect() {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<App />)
  }
}
