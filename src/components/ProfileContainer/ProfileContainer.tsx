import DropDownMenu from '../DropDrownMenu'
import './ProfileContainer.scss'

type ProfileContainerProps = {
    imgUrl: string
    name: string
}

const dropDownItems = [
    {
        item: 'profile',
        value: 'profile'
    },
    {
        item: 'config',
        value: 'config'
    },
    {
        item: 'share',
        value: 'share'
    }
]

const ProfileContainer: React.FC<ProfileContainerProps> = props => {
    return (
        <div>
            <img src={props.imgUrl} alt="profile" />
            <h4>{props.name}</h4>
            <div className="dropdown-menu">
                <DropDownMenu optionProps={dropDownItems} />
            </div>
        </div>
    )
}

export default ProfileContainer
