// Profile.js
import React from "react";

const Profile = ({ profile, onShowOnMap, onShowDetails }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={() => onShowOnMap(profile)}>Show on Map</button>
      <button onClick={() => onShowDetails(profile)}>Details</button>
    </div>
  );
};

export default Profile;
