import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Main/Main";
import {Nav} from "./components/Nav/Nav";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Works} from "./components/Works/Works";
import {Diplomas} from "./components/Diplomas/Diplomas";
import {Contacts} from "./components/Contacts/Contacts";
import state, {StateType} from "./redux/state";

type StatesType = {
    state: StateType
}

const App = (props: StatesType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        {/* /dialogs/* --> exact */}
                        <Route path='/dialogs/*'
                               element={<Dialogs
                                   state={props.state}/>}/>
                        <Route path='/main/*'
                               element={<Profile
                                   state={props.state}/>}/>
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
