import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import DefaultLayout from "./components/Layout/DefaultLayout/DefaultLayout";
import Home from "./pages/Home/Home";
import CartPlace from "./pages/CartPlace/CartPlace";
import PlaceDetail from "./pages/PlaceDetail/PlaceDetail";
// import PrivateRouter from "./Routes/PrivateRouter";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <div className="app">
        <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/place/:slug" element={<PlaceDetail />} />
            <Route path="/cart" element={<CartPlace />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
