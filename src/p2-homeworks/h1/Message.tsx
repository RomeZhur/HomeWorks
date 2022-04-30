import React from 'react'
import rome from "./Message.module.css"

type MessageType = {
    avatar: any;
    name: string;
    message: string;
    time: string;
}


function Message(props: MessageType) {
    return (
        <div className={rome.message}>
            <div className={rome.message__avatar}>
                <img className={rome.message__avatarImage} src={props.avatar}/>
            </div>
            <div className={rome.message__content}>
                <div className={rome.message__name}>{props.name}</div>
                <div className={rome.message__text}>{props.message}</div>
                <div className={rome.message__time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
