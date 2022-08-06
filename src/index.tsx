import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import {AppRootStateType, store} from "./redux/redux-store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: AppRootStateType) => {


    root.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}

        />
    )
}


rerenderEntireTree(store.getState());


store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
})