import { createHashRouter } from 'react-router-dom'
import About from '@/pages/About'
import ArticleDetail from '@/pages/ArticleDetail'
import Articles from '@/pages/Articles'
import AuthHeader from '@/pages/AuthHeader'
import AuthRoute from './AuthRoute'
import BlogOverview from '@/pages/BlogOverview'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Write from '@/pages/Write'

export const router = createHashRouter([
    {
        path: '/',
        element: (
            <AuthRoute>
                <Home />
            </AuthRoute>
        ),
        children: [
            {
                index: true,
                element: <BlogOverview />,
            },
            {
                path: 'articles',
                element: <Articles />,
            },
            {
                path: 'articles/:id',
                element: <ArticleDetail />,
            },
            {
                path: 'write',
                element: <Write />,
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
    {
        path: '/login',
        element: <AuthHeader />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

export default router
