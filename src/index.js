import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import reportWebVitals from './reportWebVitals';
// 引用專案的頁面元件
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

// Create a browser router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/about',
    element: <AboutView />
  },
  {
    path: '/contact',
    element: <ContactView />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
