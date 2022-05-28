import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export type DialogsDataArrayType = Array<DialogsDataType>
export type DialogsDataType = {
    id: number
    name: string
}

const dialogsData: DialogsDataArrayType = [
    {id: 1, name: 'Sveta'},
    {id: 2, name: 'Kolya'},
    {id: 3, name: 'Lucia'},
    {id: 4, name: 'Kostya'},
    {id: 5, name: 'Yulia'},
    {id: 6, name: 'Michael'}
]

export type MessagesDataArrayType = Array<MessagesDataType>
export type MessagesDataType = {
    id: number
    message: string
}

const messagesData: MessagesDataArrayType = [
    {id: 1, message: 'What\'s up?'},
    {id: 2, message: 'Hi!'},
    {id: 3, message: 'Shalom!'},
    {id: 4, message: 'Buenos Dias!'},
    {id: 5, message: 'Privet!'}
]

export type PostsArrayType = Array<PostsType>
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const posts: PostsArrayType = [
    {id: 1, message: 'Hi! Let\'s go working!', likesCount: 18},
    {id: 2, message: 'Do it yourself!', likesCount: 84},
    {id: 3, message: 'BlaBlaBla!', likesCount: -18}
]


root.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messagesData={messagesData} posts={posts}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
