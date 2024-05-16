import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Menu from './components/Menu/Menu';
import { MenuProvider } from './context/MenuContext';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/menu/categories",
        element: <Menu />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu/:categoryId/:categoryName",
        element: <Menu />,
        errorElement: <ErrorPage />,
      },      
  ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MenuProvider>
        <RouterProvider router={router} />
    </MenuProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
