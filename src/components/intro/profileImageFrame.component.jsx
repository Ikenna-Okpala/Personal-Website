import { ProfileImage, ProfileImageContainer } from "./profileImage.styles"
import profileImage from "./../../assets/personal-website-image-removebg.png"
/**
 * 
 * this is how you pass png images to image componenet
 */

const ProfileImageFrame = () => {
    return (
        <ProfileImageContainer>
            <ProfileImage src={profileImage} />

        </ProfileImageContainer>
    )
}

export default ProfileImageFrame