import DropDownMenu from '../DropDrownMenu'

type ProfileContainerProps = {
    imgUrl: string
}

const ProfileContainer: React.FC<ProfileContainerProps> = props => {
    const imgUrl = props.imgUrl
    return (
        <div>
            <img src={imgUrl} alt="profile" />
            <DropDownMenu />
        </div>
    )
}

export default ProfileContainer
