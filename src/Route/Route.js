import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../App";
import TableRoute from "../TableRoute/TableRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
        path: "/table",
        element: <TableRoute></TableRoute>,
    }
  ]);