import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TableContainer from "../components/table/TableContainer";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    //   loader: rootLoader,
      children: [
        {
          path: "/table",
          element: <TableContainer />,
        
        },
      ],
    },
  ]);