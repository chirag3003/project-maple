import React, { useEffect } from "react";
import { getProfileImage } from "helpers/getProfile";
import ProfileCardStyle from "./ProfileCard.style";
const details = {
    name: "Chirag Bhalotia",
    desc: "A Pro Developer",
};

function ProfileCard() {
    const Svg = getProfileImage(details.name);

    useEffect(() => {
        document.querySelector(".profileCard .image").innerHTML = Svg;
    }, [Svg]);
    return (
        <ProfileCardStyle className="profileCard min-h-max">
            <div className="image"></div>
            <div className="name mt-4 font-medium ">
                <h1>{details.name}</h1>
            </div>
            <div className="title font-medium">
                <p>{details.desc}</p>
            </div>

        </ProfileCardStyle>
    );
}

export default ProfileCard;
