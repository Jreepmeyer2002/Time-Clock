import Login from '././Login';
import Home from "./Home";
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
const App  = () => {
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
}
export default App;
