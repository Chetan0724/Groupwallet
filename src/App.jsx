import "./App.css";
import Signup from "./components/Signup/Signup.jsx";
import Signin from "./components/Signin/Signin.jsx";
import Main from "./components/Main/Main.jsx";
import Heading from "./components/Heading/Heading.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;