import React from 'react'
import './App.css'
import SideMenu from './components/SideMenu'
import ProfileContainer from './components/ProfileContainer'
import MainHeader from './components/MainHeader'
import { FaPlus } from 'react-icons/fa'

// dev dependencies
const user = {
    name: 'Kevin Krause',
    profilePicture:
        'https://media.licdn.com/dms/image/D4D03AQFsW68tfJ0iEw/profile-displayphoto-shrink_200_200/0/1706335405840?e=1712793600&v=beta&t=E3voh_10qhGoRxpi43L_ScnqzjEg6-9MKO-59hUjMZw'
}

const handleClick = () => {
    //callback api fuction
    return null
}

function App() {
    return (
        <div className="main-container">
            <div className="side-menu-container">
                <ProfileContainer imgUrl={user.profilePicture} />
                <SideMenu />
            </div>

            <div className="home-page-container">
                <MainHeader
                    icon={FaPlus}
                    onclick={handleClick}
                    title="Novo chat"
                />
            </div>
            {/* <SearchBar />
            <MessageChannelComponent /> */}
        </div>
    )
}

export default App
