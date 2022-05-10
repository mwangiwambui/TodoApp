import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer"
import "./App.css"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
<TodoContainer />
</HashRouter>
</React.StrictMode>, document.getElementById("root"))
