import React from 'react'
import './App.css'
import SideMenu from './components/SideMenu'
import ProfileContainer from './components/ProfileContainer'

function App() {
    return (
        <div className="main-container">
            <div className="side-menu-container">
                <ProfileContainer imgUrl="https://media.licdn.com/dms/image/D4D03AQFsW68tfJ0iEw/profile-displayphoto-shrink_200_200/0/1706335405840?e=1712793600&v=beta&t=E3voh_10qhGoRxpi43L_ScnqzjEg6-9MKO-59hUjMZw" />
                <SideMenu />
            </div>

            <div className="home-page-container">
                {
                    'these should render at the same time..., maybe wrap it in a component'
                }
                <div>
                    <h1>Chats</h1>
                    <button>dropdown menu 'recent chats'</button>
                </div>
                <p>Button component 'create new chat'</p>
            </div>
            {/* <SearchBar />
            <MessageChannelComponent /> */}
        </div>
    )
}

export default App
