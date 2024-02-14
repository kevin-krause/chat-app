import React from 'react'
import { IconType } from 'react-icons'
import './FormButton.scss'

export interface IButtonProps {
    title: string
    icon: IconType
    onclick: () => void
}

const FormButton: React.FC<IButtonProps> = props => {
    const { title, onclick, icon } = props
    return (
        <button className="form-button" onClick={onclick}>
            {React.createElement(icon)}
            <span>{title}</span>
        </button>
    )
}

export default FormButton
