import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsPageType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}


export function Dialogs(props: DialogsPropsType) {


    const dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    )

    const messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>)


    //
    // const newMessageText = useRef<HTMLTextAreaElement>(null)
    // ! сделать через createRef
    // const newMessageText: LegacyRef<HTMLTextAreaElement> = React.createRef();


    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator(props.state.newMessageBody))
    };

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={props.state.newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder={'Enter new message'}>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
            {/*<div className={styles.newText}>*/}
            {/*    <textarea ref={newMessageText}></textarea>*/}
            {/*    <button type='button' onClick={onClickHandler}>Add new message</button>*/}
            {/*</div>*/}
        </div>
    );
}
