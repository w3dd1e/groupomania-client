import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./views/App";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";
import Feed, { loader as feedLoader } from "./views/Feed";
import ProfilePage, { loader as profileLoader } from "./views/ProfilePage";

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
            path: "signup",
            element: <SignUpPage />,
          },
          {
            path: "feed",
            element: <Feed />,
            loader: feedLoader,
          },
          {
            path: "profile/:userId",
            element: <ProfilePage />,
            loader: profileLoader,
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
