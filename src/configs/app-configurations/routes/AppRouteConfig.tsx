import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* const router = createBrowserRouter([
    {
      element: "HeaderLayout" ,
      children: [
        {
          path: "/",
          element: <h1>Hello</h1>,
        },
        {
          path: '/foo',
          element: <div>foo</div>,
        },
        {
          path: '/bar',
          element: <h1>foo</h1>,
        }
      ],
    },
  ]);
 */
export const AppRouteConfig = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: "Home",
            index: true,
        },
        {
            path: "/about",
            element: "About",
        },
        {
            path: "*",
            element: <h1>Not Found</h1>,
        },
    ]);
    return <RouterProvider router={router} />;
};
