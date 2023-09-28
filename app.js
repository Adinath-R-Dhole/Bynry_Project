// App.js
import React, { useState } from "react";
import profiles from "./data";
import Profile from "./profile";
import ProfileDetails from "./profileDetails";
import Map from "./map";

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleShowOnMap = (profile) => {
    setSelectedProfile(profile);
  };

  const handleShowDetails = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseDetails = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="app">
      <h1>Profile Map App</h1>
      <div className="profile-list">
        {profiles.map((profile) => (
          <Profile
            key={profile.id}
            profile={profile}
            onShowOnMap={handleShowOnMap}
            onShowDetails={handleShowDetails}
          />
        ))}
      </div>
      {selectedProfile && (
        <>
          <Map address={selectedProfile.address} />
          <ProfileDetails profile={selectedProfile} />
          <button onClick={handleCloseDetails}>Close Details</button>
        </>
      )}
    </div>
  );
};

export default App;
