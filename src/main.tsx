import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Application, ReactBoot } from '@pjqdyd/react-boot'
import Router from './router'
import './index.css'

@Application({ name: 'app', description: '我的应用' })
//eslint-disable-next-line
class App implements ReactBoot{
    run () {
        ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
            <React.StrictMode>
                <RouterProvider router={Router} />
            </React.StrictMode>
        )
    }

    destroy () {
        console.log('App destroy')
    }
}
