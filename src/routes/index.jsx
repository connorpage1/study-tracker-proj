import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TableContainer from "../components/table/TableContainer";
import Form from "../components/form/Form";
import LandingPage from "../components/main/LandingPage";
import Table from "../components/table/Table";
import ErrorPage from "../components/error/ErrorPage";
import ExpandedView from "../components/table/ExpandedView";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
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
              index: true,
              element: <Table />,

            },
            {
              path: "new",
              element: <Form />,

            },
            {
              path: ":id",
              element: <ExpandedView />,
            
            },
            {
              path: ":id/edit",
              element: <Form />
            }
          ]
        
        },
        
      ],
    },
  ]);