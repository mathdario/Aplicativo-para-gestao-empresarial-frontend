import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainApp from "./../pages/MainApp/index";

import ProtectedRoutes from "./ProtectedRoutes";
import Resume from "./../pages/MainApp/components/Resume/index";
import Clients from "../pages/MainApp/components/Clients";
import Charges from "../pages/MainApp/components/Charges";
import ClientsDetail from "./../pages/MainApp/components/ClientsDetail/index";

export default function OpenRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/main" element={<MainApp />}>
            <Route path="/main/home" element={<Resume />} />
            <Route path="/main/clients/" element={<Clients />} />
            <Route path="/main/clients/:id" element={<ClientsDetail />} />
            <Route path="/main/charges/" element={<Charges />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
