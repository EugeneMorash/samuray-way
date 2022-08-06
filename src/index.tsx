import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import {AppRootStateType, store} from "./redux/redux-store";
import {MyProvider} from "./StoreContext";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: AppRootStateType) => {


    root.render(
        <MyProvider store={store}>
            <App />
        </MyProvider>
    )
}


rerenderEntireTree(store.getState());


store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
})