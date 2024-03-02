import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./views/App";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";
import Feed, { loader as feedLoader } from "./views/Feed";
import ProfilePage, { loader as profileLoader } from "./views/ProfilePage";
import InboxPage from "./views/InboxPage";
import SearchPage from "./views/SearchPage";
import SettingsPage from "./views/SettingsPage";
import ErrorPage from "./views/ErrorPage";

import "./index.css";
import SignUp from "./components/Auth/SignUp";

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
          {
            path: "inbox",
            element: <InboxPage />,
            children: [
              {
                path: "read",
                element: <InboxPage />,
              },
              {
                path: "unread",
                element: <InboxPage />,
              },
            ],
          },

          {
            path: "search",
            element: <SearchPage />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
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
