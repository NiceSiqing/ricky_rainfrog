import React from 'react';
import './Home.css';
import santa from '../assets/ricky_santa.jpg'
import vampire from '../assets/ricky_vampire.jpg'
function Home() {
  return (
    <div>
      <h2>Welcome to the Home of Ricky Rain Frog!</h2>
      <section id="gallery">
        <h3>Ricky's Gallery</h3>
        <div className="gallery">
          <img src={santa} alt="Santa Ricky" />
          <img src={vampire} alt="Vampire Ricky" />
        </div>
      </section>
    </div>
  );
}

export default Home;
