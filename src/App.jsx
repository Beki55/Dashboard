import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts"; // Import the Layout component
import Dashboard from "./components/dashboard";
import Leads from "./components/leads";
import Analytics from "./components/analytics";
import Reports from "./components/reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Set Layout as the root
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/leads",
        element: <Leads />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
