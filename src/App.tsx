import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    return (
        <div>
            <div id="top-div">
                <div>
                    <h1>Chats</h1>
                    <button>dropdown menu 'recent chats'</button>
                </div>
                <p>Button component 'create new chat'</p>
            </div>
            <SearchBar />
            <MessageChannelComponent />
        </div>
    )
}

export default App
