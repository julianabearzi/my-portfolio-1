import React from 'react';
import './projects.css';
import IMG1 from '../../assets/screen.png';
import IMG2 from '../../assets/checkers.png';
import IMG3 from '../../assets/weather.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Students App that consumes an API that I previously made',
    github: 'https://github.com/julianabearzi/mcga_P2',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Web implementation of the checkers',
    github: 'https://github.com/julianabearzi/my-checkers-game',
  },
  {
    id: 3,
    image: IMG3,
    title: 'App to search the weather in different locations',
    github: 'https://github.com/julianabearzi/weather-app',
  },
];
const Projects = () => {
  return (
    <section id='projects'>
      <h5>Some of my work</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github}>Github</a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
