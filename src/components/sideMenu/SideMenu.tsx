import React from 'react'
import { IconType } from 'react-icons'
import './SideMenu.scss'
import FormButton from '../FormButton/FormButton'
import { FaPlus } from 'react-icons/fa'

type MenuItem = {
    title: string
    icon: IconType
    link: string
}

type SideMenuProps = {
    items: MenuItem[]
}
const handleClick = () => {
    console.log('handleClick')
}

const SideMenu: React.FC<SideMenuProps> = ({ items }) => {
    return (
        <>
            <ul className="side-menu">
                {items.map((item, index) => (
                    <li key={index} className="side-menu-item">
                        <a href={item.link}>
                            {React.createElement(item.icon)}
                            <span>{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <FormButton icon={FaPlus} onclick={handleClick} title="log out" />
        </>
    )
}

export default SideMenu
