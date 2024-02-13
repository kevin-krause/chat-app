import React from 'react'
import './DropDownMenu.scss'

type TOptionProps = {
    item: string
    value: string
}

interface DropDownMenuProps {
    optionProps: TOptionProps[]
}

// change hardcoded string

const DropDownMenu: React.FC<DropDownMenuProps> = props => {
    const { optionProps } = props
    return (
        <div>
            <select id="dropdown" className="dropdown-menu">
                {optionProps.map((object, index) => (
                    <option
                        key={index}
                        value={object.value}
                        className="dropdown-option"
                    >
                        {object.item}
                    </option>
                ))}

                {/* <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option> */}
            </select>
        </div>
    )
}

export default DropDownMenu
