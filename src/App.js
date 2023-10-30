import {BrowserRouter as Router,Switch,Route,Link,Routes} from "react-router-dom";
import React, { useState } from "react";
import FormData from "./components/FormData";
import FormTable from "./components/FormTable";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<FormData/>} />
          <Route path="/userdata" element={<FormTable/>} />
        </Routes>
      </Router>
    </div>
  )
}

