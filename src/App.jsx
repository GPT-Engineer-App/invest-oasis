import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import Investments from "./pages/Investments.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Navigation from "./components/Navigation.jsx";
import Register from "./pages/Register.jsx";

import ContactUs from "./pages/ContactUs.jsx";
import MFASetup from "./pages/MFASetup.jsx";
import MFAVerification from "./pages/MFAVerification.jsx";
import OpenAccount from "./pages/OpenAccount.jsx";
import FundAccount from "./pages/FundAccount.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/mfa-verification" element={<MFAVerification />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/open-account" element={<OpenAccount />} />
        <Route path="/fund-account" element={<FundAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
