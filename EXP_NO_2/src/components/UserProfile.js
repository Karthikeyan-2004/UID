import React from 'react';
import { useLocation } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const location = useLocation();
  const { user } = location.state;

  return (
    <section className="user-profile">
      <div className="profile-card">
        <h2>User Profile</h2>
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
