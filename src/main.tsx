import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/app.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {ContactView, HomeView, PortfolioView, PrivacyPolicyView, ResumeView} from "./views"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/contact',
    element: <ContactView />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyView />
  },
  {
    path: '/resume',
    element: <ResumeView />
  },
  {
    path: '/portfolio',
    element: <PortfolioView />
  },
])

document.title = "Portfolio Hakim Asrori";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
