import Home from "../pages/Home/Home";
import PlaceDetail from "../pages/PlaceDetail/PlaceDetail";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import CartPlace from "../pages/CartPlace/CartPlace";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/place/:slug",
    component: PlaceDetail,
  },
  {
    path: "/signin",
    component: SignIn,
    layout: null,
  },
  {
    path: "/signup",
    component: SignUp,
    layout: null,
  },
  {
    path: "/cart",
    component: CartPlace,
  },
];

export const privateRoutes = [];
