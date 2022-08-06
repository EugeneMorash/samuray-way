import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Main/Profile";
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Works} from "./components/Works/Works";
import {Diplomas} from "./components/Diplomas/Diplomas";
import {Contacts} from "./components/Contacts/Contacts";
import {ActionType, AppRootStateType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type PropsType = {
    dispatch: (action: ActionType) => void
    state: AppRootStateType
}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer
                                   state={props.state}
                                    dispatch={props.dispatch}
                               />}/>
                        <Route path='/main/*'
                               element={<Profile
                                   state={props.state}
                               />}/>
                        <Route path='/works/*' element={<Works/>}/>
                        <Route path='/diplomas/*' element={<Diplomas/>}/>
                        <Route path='/contacts/*' element={<Contacts/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
