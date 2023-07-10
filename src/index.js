import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    HashRouter,
    Route,
    Routes
} from "react-router-dom"
import './index.css';
import './document_viewer.css';

import ErrorPage from "./error_page"
import DocumentViewer from "./document_viewer"
import SentenceBuilder from "./sentece_builder"

// const router = createHashRouter([{
//     path: '/',
//     element: <SentenceBuilder />,
//     errorElement: <ErrorPage />
// }, {
//     path: '/the_nakhovny_incident/:id',
//     element: <DocumentViewer />,
//     errorElement: <ErrorPage />
// }])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<SentenceBuilder />} />
                <Route exact path='/the_nakhovny_incident/:id' element={<DocumentViewer />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
)
