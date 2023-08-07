import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./routes/profile.tsx";
import Reports from "./routes/reports.tsx";
import Login from "./routes/login.tsx";
import Register from "./routes/register.tsx";
import Logout from "./routes/logout.tsx";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {ProfileLoader} from "./loaders/profileLoader.ts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Profile />,
                loader: ProfileLoader
            },
            {
                path: '/reports',
                element: <Reports />
            },
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/logout',
        element: <Logout />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
