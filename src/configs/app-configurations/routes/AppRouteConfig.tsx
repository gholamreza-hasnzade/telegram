// * Import Tools
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// * components/views
import { AuthLayout } from "@components/templates";
import { SignUpView, VerifyView } from "@components/views/Auth";

export const AppRouteConfig = () => {
    const router = createBrowserRouter([
        {
            element: <AuthLayout />,
            children: [
                {
                    path: "/signup",
                    element: <SignUpView />,
                },
                {
                    path: "/Verify",
                    element: <VerifyView />,
                },
            ],
        },
        {
            path: "*",
            element: <h1>Not Found</h1>,
        },
    ]);
    return <RouterProvider router={router} />;
};
