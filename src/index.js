import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom"
import './index.css';
import './document_viewer.css';

import ErrorPage from "./error_page"
import DocumentViewer from "./document_viewer"
import SentenceBuilder from "./sentece_builder"


const router = createHashRouter([{
    path: '/',
    element: <SentenceBuilder />,
    errorElement: <ErrorPage />
}, {
    path: '/the_nakhovny_incident',
    errorElement: <ErrorPage />
}, {
    path: '/the_nakhovny_incident/first_hand_accounts',
    element: <DocumentViewer path='./txt/the_nakhovny_incident/first_hand_accounts.txt' />,
    errorElement: <ErrorPage />
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
