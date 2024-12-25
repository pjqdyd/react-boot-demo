import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Application, createApp } from './react-boot'
import { ReactBootApplication } from '@pjqdyd/react-boot'
import Router from './router'
import './index.css'

import modules from "@/react-modules.ts";

// 启动类启动应用
@Application({ modules: modules })
//eslint-disable-next-line
class App implements ReactBootApplication {
    run () {
        ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
            <React.StrictMode>
                <RouterProvider router={Router} />
            </React.StrictMode>
        )
    }
}

// createApp 启动应用
// const app = createApp({
//     modules: modules,
//     run: () => {
//         ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//             <React.StrictMode>
//                 <RouterProvider router={Router} />
//             </React.StrictMode>
//         )
//     }
// })
