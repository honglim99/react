import React from "react";
import Card from "./Card";
import "./AboutMe.css";
import profileImage1 from "./images/profiles/1.jpg";


function AboutMe() {
  const profiles = [
    {
      image: profileImage1,
      name: "윤홍림",
      intro:
        "분석하는 개발자, 윤홍림입니다.",
    },
  ];

  return (
    <div className="profile">
      <h1>본인 프로필</h1>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <Card key={index}>
            <img
              src={profile.image}
              alt={`${profile.name}'s profile`}
              className="profile-image"
            />
            <h1>{profile.name}</h1>
            <p>{profile.intro}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
