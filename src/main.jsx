import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./views/App";
import LoginPage from "./views/LoginPage";
import Feed from "./views/Feed";
import Profile from "./components/User/Profile";
import Inbox from "./components/Inbox/Inbox";
import Search from "./components/Search/Search";
import Settings from "./components/User/Settings";
import ErrorPage from "./views/ErrorPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,

        children: [
          { index: true, element: <LoginPage /> },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "feed",
            element: <Feed />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "messages",
            element: <Inbox />,
          },
          {
            path: "search",
            element: <Search />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
