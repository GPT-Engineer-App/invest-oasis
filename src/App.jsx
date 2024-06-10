import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import Investments from "./pages/Investments.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Navigation from "./components/Navigation.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
