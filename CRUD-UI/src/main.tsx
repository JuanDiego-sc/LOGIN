import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'
import './assets/bootstrap.css'
import './assets/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import Dashboard from './pages/Dashboard.tsx';
import ProtectedRoute from './pages/protectedRoute';
import { AuthProvider } from './auth/authProvider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/",
    element: <ProtectedRoute></ProtectedRoute>,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      }
    ]
  },

  {
    path: "/",
    element: <ProtectedRoute></ProtectedRoute>,
    children: [{
      path: "/adminPannel",
      element: <App></App>,
    }]
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
