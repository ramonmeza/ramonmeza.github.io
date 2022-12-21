import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import './index.css';

import ErrorPage from "./error_page"
import ImageRuiner from "./image_ruiner"
import SentenceBuilder from "./sentece_builder"


const router = createBrowserRouter([{
    path: '/',
    element: <SentenceBuilder />,
    errorElement: <ErrorPage />
}, {
    path: '/test',
    element: <ImageRuiner />
},])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
