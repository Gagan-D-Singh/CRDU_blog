import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Posts from './components/pages/Posts.tsx'
import About from './components/pages/About.tsx'
import Home from './components/pages/Home.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'
import Login from './components/pages/Login.tsx'
import Protected from './components/Protected.tsx'

const router = createBrowserRouter([
  {path: '/', element: <App />,
    children: [
      {path: '/', element: <Protected />,
        children: [
          {index: true, element: <Home />},
          {path: 'posts', element: <Posts />},
          {path: '/about', element: <About />},
        ],
      },
    ],
  },
  {path: '/login', element: <Login />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
