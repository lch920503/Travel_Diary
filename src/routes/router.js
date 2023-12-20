import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import MyPage from "../pages/MyPage";

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
    ],
  },
]);
