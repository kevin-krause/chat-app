import React from 'react'

// side menu component, has to be abstract

export const index = () => {
    return (
        <>
            <p>componente com info de perfil, foto e menu com dropdown</p>
            <p>
                <ul>
                    <li>home</li>
                    <li>chat</li>
                    <li>contact</li>
                    <li>notifications</li>
                    <li>calendar</li>
                    <li>settings</li>
                </ul>
            </p>

            <button>log out</button>
        </>
    )
}
