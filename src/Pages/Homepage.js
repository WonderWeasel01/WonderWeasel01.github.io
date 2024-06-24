/*Import React*/
import React from 'react';

/*Css*/
import '../Css/Homepage.css';
import '../Css/Default.css';


/*Assets*/

import VideoBackground from '../Assets/Background.mp4';
import WentzelEvent from '../Assets/WentzelEvent.png';


/*ICONS*/
import { FaArrowDown } from "react-icons/fa";



function App() {
  return (
    <div className="App">
      <section> 
          <div class="VideoBackground">
            <div class="container-fluid">
              <div class="row">
                <div class="column">
                  <h1 class="forsideH1 main-text">Wentzel <span>Design</span></h1>
                  <h2 class="headerPText main-text">
                  Explore my creative portfolio showcasing a range of projects and discover how I can bring your vision to life with custom WordPress and React websites. Let’s build something amazing together!
                    <h2 class="secondary-text" >Get a free consultaition. </h2>
                  </h2>

                

                  <a
                    href='#Preview'
                    class="Button main-color2"
            
                  >
                    <h2 class="ButtonText">View Projects</h2>
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

