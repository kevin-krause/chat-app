import React from 'react'

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
            <label>Select an option:</label>
            <select id="dropdown">
                {optionProps.map((object, index) => (
                    <option key={index} value={object.value}>
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
