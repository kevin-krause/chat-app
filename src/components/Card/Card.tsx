import React from 'react'
import './Card.scss'

type TNotification = {
    user: string
    message: string
    summary: string
    time: number
}

interface ICard {
    cardInfo: {
        imgUrl: string
        name: string
        notifications: TNotification[]
    }
}

const Card = (props: ICard) => {
    // const lastNotification = props.notification[props.notification.length - 1]
    return (
        <div className="card-container">
            <div className="profile-box">
                <img src={props.cardInfo.imgUrl} alt="profile" />
                <div className="name-box">
                    <p className="name-item">{props.cardInfo.name}</p>
                    <p className="status-item">status</p>
                </div>
            </div>

            {props.cardInfo.notifications.map((notification, index) => (
                <div key={index} className="message-box">
                    <p>{notification.message}</p>
                </div>
            ))}
        </div>
    )
}

export default Card
