import React from 'react'
import { IconType } from 'react-icons'
import './AsyncButton.scss'

export interface IButtonProps {
    title: string
    icon: IconType
    onclick: () => void
}

const AsyncButton: React.FC<IButtonProps> = props => {
    const { title, onclick, icon } = props
    return (
        <button className="async-button" onClick={onclick}>
            {React.createElement(icon)}
            <span>{title}</span>
        </button>
    )
}

export default AsyncButton
