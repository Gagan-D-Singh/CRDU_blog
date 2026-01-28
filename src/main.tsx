import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Posts from './components/pages/Posts.tsx'
import About from './components/pages/About.tsx'

const router = createBrowserRouter([
  {path: '/', element: <App />,
    children: [
      {index: true, element: <App />},
      {path: 'posts', element: <Posts />},
      {path: '/about', element: <About />},
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />  
  </StrictMode>,
)
