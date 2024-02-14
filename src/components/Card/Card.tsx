import React from 'react'
import './Card.scss'

type TNotification = {
    user: string
    message: string
    summary: string
    time: number
}

interface ICard {
    imgUrl: string
    name: string
    notifications: TNotification[]
}

const Card = (props: ICard) => {
    // const lastNotification = props.notification[props.notification.length - 1]
    return (
        // <div className="card-container">
        //     <div className="profile-box">
        //         <div>
        //             <img src={props.imgUrl} alt="" />
        //             <div>
        //                 <p>{props.name}</p>
        //                 <>{lastNotification}</>
        //             </div>
        //         </div>
        //         <p>time the message was sent</p>
        //     </div>
        // </div>
        <div className="card-container">
            <div className="profile-box">
                <div>
                    <img src={props.imgUrl} alt="" />
                    <div>
                        <p>{props.name}</p>
                        {/* Iterando sobre as notificações */}
                    </div>
                    {props.notifications.map((notification, index) => (
                        <div key={index}>
                            <p>{notification.message}</p>
                            <p>{notification.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card
