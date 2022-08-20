import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import {BrowserRouter} from "react-router-dom";
import {StateProvider} from "./context/StateProvider";
import {initialState} from "./context/initialState";
import reducer from "./context/reducers";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StateProvider initialState={initialState} reducer={reducer}>
                <App/>
            </StateProvider>
        </BrowserRouter>
    </React.StrictMode>
)