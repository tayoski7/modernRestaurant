import React from 'react'
import './style.css';
import Chefimg from './images/chef2.jpg'; 

function About() {
  return (
    <div className='main-conatiner'>
        <div className='container2'>
          <div className='hero'>
              <h1 className='text-center'>About</h1>
          </div>
        </div>
        <div className='stripper'>
          <div className='grid-container'>
              <div className='grid-row'>
                <div className='grid-col2'>
                  <div className='grid-img'>
                    <img src={Chefimg} alt='hello' />
                  </div>
                  <div className='grid-content'>
                      <h3>How Modern Restaurant Came to be</h3>
                      <p className='aboutPara'>Modern had an unconventional start as a restaurant.
                      Originally opening as a pop-up event, our original 
                      aim was to showcase the unique culinary stylings of
                      our head chef, Kabu Natsu. </p>
                    </div>
                </div>
                
            </div>
          </div>
          
          <div className='grid-container2'>
              <div className='grid-row2'>
                <div className='grid-col22 grid-reversed'>
                <div className='grid-img2'>
                </div>
                <div className='grid-content2'>
                  <div className='content1'>
                  <p className='aboutPara'>When it became clear that there was going to be
                       continued interest in the eating experience we'd curated,
                        we found a permanent location, expanded our menu, and began 
                        regular service. That was 5 years ago, and we're still going strong today.
                        </p>
                  </div>
                      <div className='content2'>
                      <p className='aboutPara'>Though we've come a long way from where we started
                       (we're up to 12 chefs and 10 servers on a normal evening), our focus has ever shifted. 
                       When you eat with us, you can expect to find new flavors, existing foods, and a sparkling evening. </p>
                      </div>
                   
                  </div>
                </div>
                
            </div>
          </div>
        </div>

        <div className='book-container'>
          <div className='book-wrapper'>
          <div className='book-title'>
          <h1>Book a table</h1>
          </div>
          <div className='book-content'>
            <p className='aboutPara'>Reserving a table beforehand means less waiting. 
              Groups of 8 or more must reserve ahead of time.</p>
          </div>
            <div className='book-btn'>
             <a href='/contact'>
                 <button className='aboutButton'>Book now</button>
             </a>
            </div>
        </div>
  </div>
         
</div>
    
    
   
   
  )
}

export default About
