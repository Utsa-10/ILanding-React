import React from "react";
import "./pro.css";

function Pro() {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img
          className="profile-image"
          src="https://bootstrapmade.com/content/demo/iLanding/assets/img/avatar-1.webp"
          alt=""
        />
      </div>
      <div className="profile-info-container">
        <p className="profile-info-name">Mario Smith</p>
        <p className="profile-info-designation">CEO & Founder</p>
      </div>
    </div>
  );
}

export default Pro;
