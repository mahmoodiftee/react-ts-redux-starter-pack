import MainLayout from "@/components/Layouts/MainLayouts";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
]);

export default router;
