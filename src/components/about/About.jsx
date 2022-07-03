import React, { useState } from 'react';
import './about.css';
import { images } from './imgData';

function About() {

  const [idx, setIdx] = useState(0)

  function nextPic() {
    if (idx === 2){
      setIdx(0)
    }
    else{
      setIdx(idx + 1)
    }
  }

  function prevPic() {
    if (idx === 0){
      setIdx(2)
    }
    else{
      setIdx(idx - 1)
    }
  }

  function match(index){
    if (idx === index){
      return "dot active"
    }
    else{
      return "dot"
    }
  }

  function dotClick1(){
    setIdx(0)
  }

  function dotClick2(){
    setIdx(1)
  }

  function dotClick3(){
    setIdx(2)
  }

  return (

    <section>
      <div className='grid-container-a'>

        <div className='grid-item grid-item-1a'>

          <h1 className='about-me-title'>
             About Me
          </h1>
          <p className='about-me-p'>I’m a Mechatronic Systems Engineering new graduate from University of Western Ontario. I have experience building products with signal processing, image processing, and internet of things (IoT) applications. Currently, I am diving into web development.
    Outside of my professional life, I like to cook, exercise, explore different coffee shops. When I’m feeling down, playing with my dog cheers me up.
          </p>
          
        </div>

        <div className='grid-item grid-item-2a'>
          
          <button onClick={nextPic} className='button-forward'>
            &#8250;
          </button>
          <button onClick={prevPic} className='button-prev'>
            &#8249;
          </button>

          <img src={images[idx].img} alt='' className='slide-img'/> 

        </div>

        <div className='grid-item grid-item-3a'>
          <div className='dots'>
            <span onClick={dotClick1} className={match(0)}></span>
            <span onClick={dotClick2} className={match(1)}></span>
            <span onClick={dotClick3} className={match(2)}></span>
          </div>
        </div>


      </div>
    </section>
  )
}

export default About