import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/Views/App";
import LoginPage from "./components/Views/LoginPage";
import Posts from "./components/Posts/Posts";
import Profile from "./components/User/Profile";
import Inbox from "./components/Inbox/Inbox";
import Search from "./components/Search/Search";
import Settings from "./components/User/Settings";
import ErrorPage from "./components/Views/ErrorPage";

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
            path: "feed",
            element: <Posts />,
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
