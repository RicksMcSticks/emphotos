import './Home.css';
import React from 'react';


const Home = () => {
    return(
        <div className='main-home'>
          <h1>its all about you</h1>

          <section className='hot-pics'>
            <div className='loop-tile'>
                <div className='title-1'>PUMPIN THAT IRON!!</div>
                <div className='photo-loop'>
                    <div>
                        <img className='Curls' src={ require('../Images/Curls.jpg')} alt="" />
                        <img className='Bros' src={ require("../Images/Bros.jpg")} alt="" />
                        {/* <img className='Cutie' src={ require("../Images/Cutie.jpg")} alt="" /> */}
                        <img className='Flex' src={ require("../Images/Flex.jpg")} alt="" />
                        <img className='Kitty' src={ require("../Images/Kitty.jpg")} alt="" />
                        <img className='Man' src={ require("../Images/Man.jpg")} alt="" />
                        <img className='Tri' src={ require("../Images/Tri.jpg")} alt="" />
                    </div>
                </div>
            </div>

          </section>
      
        </div>
    )
}

export default Home;