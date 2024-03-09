import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import ErrorPage from "./pages/ErrorPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import NewPost from "./components/NewPost";
import EditProfile from "./components/EditProfile";

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
          { index: true, element: <SignIn /> },
          {
            path: "login",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "feed",
            element: <Feed />,
            /*loader: feedLoader,*/
          },
          {
            path: "profile",
            element: <Profile />,
            /*loader: profileLoader,*/
          },
          {
            path: "newPost",
            element: <NewPost />,
          },
          { path: "editProfile", element: <EditProfile /> },
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
