import DropDownMenu from '../DropDrownMenu'

type ProfileContainerProps = {
    imgUrl: string
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
    const imgUrl = props.imgUrl
    return (
        <div>
            <img src={imgUrl} alt="profile" />
            <DropDownMenu optionProps={dropDownItems} />
        </div>
    )
}

export default ProfileContainer
