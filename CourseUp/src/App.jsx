import "./App.css";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./component/Courses/Courses";
import Footer from "./component/Layout/Footer/Footer";
import Header from "./component/Layout/Header/Header";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import ForgetPassword from "./component/Auth/ForgetPassword";
import ResetPassword from "./component/Auth/ResetPassword";
import ContactUs from "./component/ContactUs/ContactUs";
import RequestUs from "./component/RequestUs/RequestUs";
import About from "./component/About/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/requestUs" element={<RequestUs />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/resetPassword/:token"
            element={<ResetPassword />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
      <div>App is working</div>
    </>
  );
}

export default App;
