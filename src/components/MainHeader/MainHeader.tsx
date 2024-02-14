import React from 'react'
import AsyncButton from '../AsyncButton'
import { IButtonProps } from '../AsyncButton/AsyncButton'
import DropDownMenu from '../DropDrownMenu'
import './MainHeader.scss'

const dropDownItems = [
    {
        item: 'chats',
        value: 'chats'
    },
    {
        item: 'teams',
        value: 'teams'
    },
    {
        item: 'sheets',
        value: 'sheets'
    }
]
const MainHeader: React.FC<IButtonProps> = props => {
    const { title, onclick, icon } = props
    return (
        <div className="main-header">
            <div className="title-container">
                <h1 className="main-title">Chats</h1>
                <DropDownMenu optionProps={dropDownItems} />
            </div>
            <div className="button-container">
                <AsyncButton title={title} onclick={onclick} icon={icon} />
            </div>
        </div>
    )
}

export default MainHeader
