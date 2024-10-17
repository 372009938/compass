import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Publish from '@/pages/Publish'
import Article from '@/pages/Article'
import Home from '@/pages/Home'
import Test from '@/pages/Test'
import Compass from '@/pages/Compass'

import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        // element: <AuthRoute> <Layout /> </AuthRoute>,
        // element: <Layout />,
        element: <Compass />,
        children: [{
            index: true,
            element: <Home />,
        }, {
            path: 'article',
            element: <Article />
        }, {
            path: 'publish',
            element: <Publish />
        }],
    }, {
        path: '/login',
        element: <Login />
    }, {
        path: '/test',
        element: <Test />
    }, {
        path: '/compass',
        element: <Compass />
    }, {
        path: '*',
        element: <NotFound />
    }

])
export default router
