import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TableContainer from "../components/table/TableContainer";
import LandingPage from "../components/main/LandingPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    //   loader: rootLoader,
      children: [
        { index: true,
          element: <LandingPage />
        },
        {
          path: "/table",
          element: <TableContainer />,
        
        },
      ],
    },
  ]);