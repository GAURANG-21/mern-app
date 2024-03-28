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
import Subscribe from "./component/Payments/Subscribe";
import PaymentSuccess from "./component/Payments/PaymentSuccess";
import NotFound from "./component/Layout/NotFound/NotFound";
import PaymentFail from "./component/Payments/PaymentFail";
import CoursePage from "./component/CoursePage/CoursePage";
import Profile from "./component/Profile/Profile";
import UpdateProfile from "./component/Profile/UpdateProfile";
import ChangePassword from "./component/Profile/ChangePassword";
import Dashboard from "./component/Admin/Dashboard/Dashboard";
import CreateCourses from "./component/Admin/CreateCourse/CreateCourse";
import AdminCourses from "./component/Admin/AdminCourses/AdminCourses";
import User from "./component/Admin/Users/Users";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/course/:id" element={<CoursePage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/changepassword" element={<ChangePassword />}></Route>
          <Route path="/updateprofile" element={<UpdateProfile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/requestUs" element={<RequestUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/paymentfail" element={<PaymentFail />} />
          <Route
            path="/resetPassword/:token"
            element={<ResetPassword />}
          ></Route>

          {/*Admin Routes*/}
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/createcourse" element={<CreateCourses />}></Route>
          <Route path="/admin/courses" element={<AdminCourses />}></Route>
          <Route path="/admin/users" element={<User />}></Route>
        </Routes>
        <Footer />
      </Router>
      <div>App is working</div>
    </>
  );
}

export default App;
