import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../layout/App'
import HomePage from '../../features/home/HomePage'
import Catlog from '../../features/catlog/Catlog'
import ProductDetails from '../../features/catlog/ProductDetails'
import AboutPage from '../../features/about/AboutPage'
import { ContactPage } from '@mui/icons-material'
import ServerError from '../errors/ServerError'
import NotFound from '../errors/NotFound'

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        { path: '', element: <HomePage /> },
        { path: 'catalog', element: <Catlog /> },
        { path: 'catalog/:id', element: <ProductDetails /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'server-error', element: <ServerError /> },
        { path: 'not-found', element: <NotFound /> },
        { path: '*', element: <Navigate replace to='/not-found' /> }
    ]
}])