import React, { useState } from 'react'
import { IconType } from 'react-icons'
import './SearchBar.scss'

interface ISearBar {
    label: string
    icon: IconType
    type: string
    options: TOptions[]
}

type TOptions = {
    title: string
    endpoint: string
}

const SearchBar = (props: ISearBar) => {
    const [selectedOption, setSelectedOption] = useState<TOptions | null>(null)

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedIndex = event.target.selectedIndex
        const selectedOption = props.options[selectedIndex]
        setSelectedOption(selectedOption)
    }

    return (
        <div className="search-bar">
            <div>
                <span> {React.createElement(props.icon)}</span>
                <input
                    type={props.type}
                    placeholder={selectedOption?.title || props.label}
                />
            </div>
            <select className="search" onChange={handleSelectChange}>
                {props.options.map((option, index) => (
                    <option
                        key={index}
                        value={option.endpoint}
                        className="search-option"
                    >
                        {option.title}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SearchBar
