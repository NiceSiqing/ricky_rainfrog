import React from 'react';
import './Home.css';
import santa from '../assets/ricky_santa.jpg';
import vampire from '../assets/ricky_vampire.jpg';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to the Home of Ricky Rain Frog!</h1>
        <h3>Explore Ricky's Gallery Below</h3>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <div className="gallery">
          <img src={santa} alt="Santa Ricky" />
          <img src={vampire} alt="Vampire Ricky" />
        </div>
      </section>
    </div>
  );
}

export default Home;
