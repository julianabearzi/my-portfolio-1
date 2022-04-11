import React from 'react';
import './about.css';
import me from '../../assets/IMG-1629.JPG';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt='about me' />
          </div>
        </div>

        <div className='about__content'>
          <p>
            I'm a Systems Analyst, currently in the last year of Computer
            Systems Engineering career. I have been dedicating myself to
            learning technologies for software development, performing projects
            that allow me to defy myself.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
