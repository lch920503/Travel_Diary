import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";
import Write from "../pages/Write";

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
        path: "/users",
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
      {
        path: "/contents/write",
        element: <Write />,
      },
    ],
  },
]);
