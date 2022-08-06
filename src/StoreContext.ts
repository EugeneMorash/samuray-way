import React from "react";
import {AppRootStateType, store} from "./redux/redux-store";


export const StoreContext = React.createContext<AppRootStateType>(null)

type PropsType = {

}

export const MyProvider = (props: PropsType) => {
    return <StoreContext.MyProvider value={props.store}>
        {props.children}
        </StoreContext.MyProvider>
}