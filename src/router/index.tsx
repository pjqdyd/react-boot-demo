
import Home from '@/pages/Home'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom'

const LazyAbout = lazy(() => import("@/pages/About"));

const Router = createBrowserRouter([
    {
        path: '/home',
        element: <Home/>,
    },
    {
        path: '/about',
        element: <About/>, // 非懒加载
    },
    {
        path: '/about-lazy',
        element: <Suspense><LazyAbout /></Suspense> // 懒加载
    },
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '*',
        element: <NotFound />,
    }
])

export default Router
