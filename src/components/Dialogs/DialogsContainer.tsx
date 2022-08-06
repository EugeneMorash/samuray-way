import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from '../../StoreContext';


export function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            { (store) => {
                const state = store.getState().dialogsPage

                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                };

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
                />
            }
            }
        </StoreContext.Consumer>
    );
}
