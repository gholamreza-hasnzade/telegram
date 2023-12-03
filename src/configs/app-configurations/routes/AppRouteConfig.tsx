// * Import Tools
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// * components/views
import { AuthLayout } from "@components/templates";
import { SignInView, SignUpView, VerifyView } from "@components/views/Auth";

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
                    path: "/verify",
                    element: <VerifyView />,
                },
                {
                    path: "/signin",
                    element: <SignInView />,
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
