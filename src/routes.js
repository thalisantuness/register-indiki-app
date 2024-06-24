import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAdmin from "./pages/registerAdmin/index";
import Validation from "./pages/validation";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
   
        <Route path="/" element={<RegisterAdmin />} />
        <Route path="/validation" element={<Validation />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
