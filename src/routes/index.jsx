import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TableContainer from "../components/table/TableContainer";
import Form from "../components/form/Form";
import LandingPage from "../components/main/LandingPage";
import Table from "../components/table/Table";


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
          path: "/sessions",
          element: <TableContainer />,
          children: [
            {
              path: "",
              element: <Table />,

            },
            {
              path: "new",
              element: <Form />,

            },
          ]
        
        },
        
      ],
    },
  ]);