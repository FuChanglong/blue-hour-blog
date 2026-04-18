import { Login } from '@/pages/Login'
import Artical from '@/pages/Artical'
import { createBrowserRouter } from 'react-router-dom'
import APP from '@/App'
import ArticalDetails from '@/pages/ArticalDetails'
import ArticalEdit from '@/pages/ArticalEdit'
import NotFound from '@/pages/NotFound'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <APP />
    },
    {
        path: '/login/:id',
        element: <Login />
    },
    {
        path: '/artical',
        element: <Artical />,
        children: [{
            // path: "details",
            index: true,
            element: <ArticalDetails />
        },
        {
            path: "edit",
            element: <ArticalEdit />
        }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router
