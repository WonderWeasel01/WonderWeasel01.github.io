/*Import React*/
import React from 'react';

/*Css*/
import '../Css/Homepage.css';


/*Assets*/

import VideoBackground from '../Assets/Background.mp4';
import WentzelEvent from '../Assets/WentzelEvent.png';


/*ICONS*/
import { FaArrowDown } from "react-icons/fa";



function App() {
  return (
    <div className="App">

    <section class="VideoBackground">
      <div class="container-fluid">
        <div class="row">
          <div class="column">
            <h1 class="forsideH1 main-text">WentzelDesign</h1>
            <div class="headerPText main-text">
              Welcome to Wentzel Design, where creativity meets convenience in
              web design. Our platform offers intuitive design tools tailored
              for developers, enabling seamless creation of stunning websites.

              <span class="text-secondary">
                Sign up for free</span
              >
              and unlock a suite of powerful features designed to elevate your
              projects effortlessly. Join a community of developers and
              designers transforming ideas into extraordinary digital
              experiences.
            </div>

            <a
              href='#Preview'
              class="Button main-color2"
       
            >
              <div class="ButtonText">View Projects</div>
              <FaArrowDown />



            </a>
          </div>
        </div>
        <div class="background">
          <div class="videoWrapper">
            <video
              class="data"
              autoplay="autoplay"
              muted="muted"
              playsinline
              loop="loop"
            >
              <source src={VideoBackground} type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="backgroundOverlay"></div>
      </div>
    </section>
    <section class="Preview" id='Preview'>
      <div class="h2text">
        <h2 class="main-text">My website projects</h2>
      </div>
      <div class="Mealshowcase">
        <div class="Frame">
          <img class="Webimage" src={WentzelEvent} alt='' />
          <h2>Wentzel Event</h2>
          <p>
            Wentzel event is Located in Denmark, Wentzel Event specializes in
            event management services, offering seamless planning and execution
            for weddings, corporate events, and special occasions.
          </p>
        </div>
        <div class="Frame">
          <img class="Webimage" src="" alt='' />
          <h2>Coming soon..</h2>
          <p></p>
        </div>
        <div class="Frame">
          <img class="Webimage" src="" alt=''/>
          <h2>Coming soon..</h2>
          <p></p>
        </div>
      </div>
    </section>
    </div>
  );

  
}




export default App;

