import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Home from '../views/Home'
import Proyects from '../views/Proyects'
import Loader from '../components/Loader'
import Error404 from '../views/Error404'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loader/>}>
                <Home/>
            </Suspense>
        ),
        errorElement: <Error404/>
    },
    {
        path: '/proyects',
        element: (
            <Suspense fallback={<Loader/>}>
                <Proyects/>
            </Suspense>
        ),
        errorElement: <Error404/>
    }
])

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes