// About.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import ReactDOM correctly

import '../Css/About.css'; // Import the About.css file

import Background from '../Assets/aboutBackground.jpg'; // Import the VideoBackground file

function About() {
  return (
    <section class="VideoBackground">
      <div class="container-fluid">
        <div class="row">
          <div class="column">
            <h1 class="forsideH1 main-text">ABOUT ME</h1>
    

             



          </div>
        </div>
        <div class="background">
          <div class="ImageWrapper">
              <img class="Image" src={Background}/>
          </div>
        </div>
        <div class="backgroundOverlay"></div>
      </div>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
);

export default About;
