import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { BackToTop } from "./components/ui/BackToTop";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#05050A] text-white selection:bg-[#00F0FF]/30 selection:text-white flex flex-col relative">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
