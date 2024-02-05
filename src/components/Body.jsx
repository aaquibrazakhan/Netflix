import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Browser, ErrorPage, Login } from "./index";
import { useDispatch } from "react-redux";

const Body = () => {

  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    }
  ]);

  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
