import React from 'react';
import {rerenderEntireTree} from "./render";
import state, { StateType } from "./redux/state";


// root.render(
//     <React.StrictMode>
//         <App state={state} addPost={addPost}/>
//     </React.StrictMode>
// );

rerenderEntireTree(state);