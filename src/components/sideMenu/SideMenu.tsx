import React from 'react'
import { IconType } from 'react-icons'
import './SideMenu.scss'

type MenuItem = {
    title: string
    icon: IconType
    link: string
}

type SideMenuProps = {
    items: MenuItem[]
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

            <button>log out</button>
        </>
    )
}

export default SideMenu
