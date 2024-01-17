import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Browser, Login } from "./index";


const Body = () => {
  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browser",
      element:<Browser/>
    },

  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>     
    </div>
  );
};

export default Body;
