import "./App.css";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./component/Courses/Courses";
import Footer from "./component/Layout/Footer/Footer";
import Header from "./component/Layout/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
        <Footer />
      </Router>
      <div>App is working</div>
    </>
  );
}

export default App;
