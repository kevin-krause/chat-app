import SideMenu from './SideMenu'
import {
    FaHome,
    FaComments,
    FaUser,
    FaBell,
    FaCalendar,
    FaCog
} from 'react-icons/fa'

const menuItems = [
    { title: 'Home', icon: FaHome, link: '/home' },
    { title: 'Chat', icon: FaComments, link: '/chat' },
    { title: 'Contact', icon: FaUser, link: '/contact' },
    { title: 'Notifications', icon: FaBell, link: '/notifications' },
    { title: 'Calendar', icon: FaCalendar, link: '/calendar' },
    { title: 'Settings', icon: FaCog, link: '/settings' }
]

const SideMenuComponent = () => {
    return <SideMenu items={menuItems} />
}
export default SideMenuComponent
