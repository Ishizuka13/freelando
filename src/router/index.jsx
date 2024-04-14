import { createBrowserRouter } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import { Completed } from "../pages/SignUp/Completed";
import { LayoutBase } from "../common/layout/layoutBase";
import { LayoutCard } from "../common/layout/layoutCard";
import { ClientModule } from "../modules/client";
import { Interests } from "../pages/SignUp/Interests";
import ClientSelection from "../pages/SignUp/ClientSelection";
import HomePage from "../pages/HomePage";
import { SignIn } from "../pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "sign",
        element: <LayoutCard />,
        children: [
          { path: "", element: <SignIn /> },
          {
            path: "signup",
            element: <SignUp />,
            children: [
              {
                path: "",
                element: <ClientSelection />,
              },
              { path: "interests", element: <Interests /> },
              {
                path: "form",
                element: <ClientModule />,
              },
              { path: "complete", element: <Completed /> },
            ],
          },
        ],
      },
    ],
  },
]);
