import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://sun1.cosmostv-by-minsk.userapi.com/s/v1/if1/HscREruKTmGkxhXH_WygJ3Q5RBh86Vtvkvf5wZ8Zi8rfReO4ymLT2ex2aDATkFWARETrlQAF.jpg?size=100x100&quality=96&crop=7,122,1433,1433&ava=1',
    name: 'MAMA',
    message: 'Рома домой, кушать!',
    time: '17:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
