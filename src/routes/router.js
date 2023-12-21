import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
