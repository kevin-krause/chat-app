import React from 'react'
import './App.css'
import SideMenu from './components/SideMenu'
import ProfileContainer from './components/ProfileContainer'
import MainHeader from './components/MainHeader'
import { FaPlus, FaSearch } from 'react-icons/fa'
import SearchBar from './components/SearchBar'
import cardsData from './fakedata'
import Card from './components/Card'

// dev dependencies
const user = {
    name: 'Kevin Krause',
    profilePicture:
        'https://media.licdn.com/dms/image/D4D03AQFsW68tfJ0iEw/profile-displayphoto-shrink_200_200/0/1706335405840?e=1712793600&v=beta&t=E3voh_10qhGoRxpi43L_ScnqzjEg6-9MKO-59hUjMZw'
}

const searchInput = {
    icon: FaSearch,
    label: 'Chats',
    type: 'text'
}

const searchOptions = [
    {
        title: 'Chats',
        endpoint: 'https://chats'
    },
    {
        title: 'Profiles',
        endpoint: 'https://profiles'
    },
    {
        title: 'Teams',
        endpoint: 'https://teams'
    }
]

const handleClick = () => {
    //callback api fuction
    return null
}

type TNotification = {
    user: string
    message: string
    summary: string
    time: number
}
const notification: TNotification = {
    user: 'User1',
    message: 'Message1',
    summary: 'Summary1',
    time: 1234567890
}

const list: TNotification[] = [notification]

function App() {
    return (
        <div className="main-container">
            <div className="side-menu-container">
                <div className="profile-container">
                    <ProfileContainer
                        imgUrl={user.profilePicture}
                        name={user.name}
                    />
                </div>
                <div>
                    <SideMenu />
                </div>
            </div>

            <div className="home-page-container">
                <MainHeader
                    icon={FaPlus}
                    onclick={handleClick}
                    title="Novo chat"
                />

                <SearchBar
                    icon={searchInput.icon}
                    label={searchInput.label}
                    type={searchInput.type}
                    options={searchOptions}
                />
                
                <Card
                    imgUrl={user.profilePicture}
                    name="kevin"
                    notifications={list}
                />
            </div>

            {/* <SearchBar />
            <MessageChannelComponent /> */}
        </div>
    )
}

export default App
