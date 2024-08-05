import React from 'react';
import './Destinations.css';

function Destinations() {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-list">
        <div className="destination-item">
          <h3>Paris</h3>
          <p>The city of light, romance, and culture.</p>
        </div>
        <div className="destination-item">
          <h3>New York</h3>
          <p>The city that never sleeps, full of energy and excitement.</p>
        </div>
        <div className="destination-item">
          <h3>Tokyo</h3>
          <p>A bustling metropolis that blends tradition and innovation.</p>
        </div>
      </div>
    </section>
  );
}

export default Destinations;
