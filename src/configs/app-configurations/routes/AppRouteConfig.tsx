// * Import Tools
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// * components/templates
import { AuthLayout, MainLayout } from "@components/templates";
// * components/views
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
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <h1>Hoem</h1>,
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
