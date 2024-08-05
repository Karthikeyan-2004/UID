import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const users = [
    {
      name: 'Karthi',
      email: 'karthi@example.com',
      location: 'Salem, TN',
      bio: 'Travel enthusiast and blogger.'
    },
    {
      name: 'Akhil',
      email: 'akhil@example.com',
      location: 'Erode, TN',
      bio: 'Photographer and adventurer.'
    }
  ];

  const handleUserClick = (user) => {
    navigate('/user', { state: { user } });
  };

  return (
    <section id="home" className="home">
      <h2>Welcome to Travel Planner</h2>
      <p>Plan your perfect trip with ease!</p>
      <br/> <p>Select user and see details</p>
      {users.map((user, index) => (
        <button key={index} onClick={() => handleUserClick(user)}>
          {user.name}
        </button>
      ))}
    </section>
  );
}

export default Home;
