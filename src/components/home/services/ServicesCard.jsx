import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./servicesCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesCard(props) {
  return (
    <div className="services-container">
      <div className="service-icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="services-info-container">
        <p className="services-info-name">
          {props.name}
        </p>
        <p className="profile-designation">
          {props.designation}
        </p>
        <p className="services-info-read">
          {props.read}
        </p>
      </div>
    </div>
  );
}

export default ServicesCard;
