import React from "react";
import Card from "./Card";
import "./AboutMe.css";
import profileImage1 from "./images/profiles/1.jpg";
import profileImage2 from "./images/profiles/2.png";
import profileImage3 from "./images/profiles/sungtak.png";


function AboutMe() {
  const profiles = [
    {
      image: profileImage1,
      name: "윤홍림",
      intro:
        "분석하는 개발자, 윤홍림입니다.",
    },
    {
      image: profileImage2,
      name : "김지원",
      intro:
        "노력하는 개발자, 김지원입니다.",
    },
    {
      image: profileImage3,
      name: "도성탁",
      intro:
        "창의적인 개발자, 도성탁입니다."
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
