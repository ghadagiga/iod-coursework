import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import TemplatePage from "./TemplatePage.jsx";
import CardForm from "../forms/CardForm.jsx";
import UserAccount from "./UserAccount.jsx";
import Services from "./Services.jsx";
import CartView from "./CartView.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/HomePage" replace />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/TemplatePage" element={<TemplatePage />} />
      <Route path="/HomePage/CardForm" element={<CardForm />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/UserAccount" element={<UserAccount />} />
    </Routes>
  );
}
