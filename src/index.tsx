import React from 'react';

import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/state";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const _callSubscriber = () => {
    root.render(

        <App
            dispatch={store.dispatch.bind(store)}
            store={store}
        />

    )
}


store.subscribe(_callSubscriber)
// _callSubscriber(store.getState());
// store.subscribe(() => {
//     let state = store.getState()
//     _callSubscriber(state)
// })
