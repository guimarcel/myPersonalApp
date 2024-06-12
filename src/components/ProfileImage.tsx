import React from "react";
import { Image } from "react-native";
import styles from "../styles/profileStyles";

interface ProfileImageProps {
  imageUrl: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageUrl: _imageUrl }) => {
  return (
    <Image
      source={{
        uri: "https://media.licdn.com/dms/image/C4D03AQGesxEZ_YuwSg/profile-displayphoto-shrink_400_400/0/1660356502031?e=1723680000&v=beta&t=b3oWcU3B3JylIzo-k6cTkF-jKRXiMwfVKG0To93lk-M",
      }} // Keep this hardcoded or replace with logic that uses _imageUrl
      style={styles.profileImage}
    />
  );
};

export default ProfileImage;
