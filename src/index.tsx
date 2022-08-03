import React from 'react';
import store, {StateType} from "./redux/store";
import ReactDOM from "react-dom/client";
import App from "./App";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerenderEntireTree = (state: StateType) => {


    root.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
        />
    )
}


rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree)