import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home of Ricky Rain Frog!</h2>
      <section id="gallery">
        <h3>Ricky's Gallery</h3>
        <div className="gallery">
          <img src="/assets/ricky_santa.jpg" alt="Santa Ricky" />
          <img src="/assets/ricky_vampire.jpg" alt="Vampire Ricky" />
        </div>
      </section>
    </div>
  );
}

export default Home;
