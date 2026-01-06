import React, { useState, useEffect } from 'react';


const Projects = () => {
 const projectsData = [
  {
    images: [
      '/images/project1-1.jpg',
      '/images/project1-2.jpg',
      '/images/project1-3.jpg',
    ],
    text: 'Wildlife Photography',
  },
  {
    images: [
      '/images/project2-1.jpg',
      '/images/project2-2.jpg',
      '/images/project2-3.jpg',
    ],
    text: 'Wedding Photography',
  },
  {
    images: [
      '/images/project3-1.jpg',
      '/images/project3-2.jpg',
      '/images/project3-3.jpg',
    ],
    text: 'Street Photography',
  },
  {
    images: [
      '/images/project4-1.jpg',
      '/images/project4-2.jpg',
      '/images/project4-3.jpg',
    ],
    text: 'Event Photography',
  },
  {
    images: [
      '/images/project5-1.jpg',
      '/images/project5-2.jpg',
      '/images/project5-3.jpg',
    ],
    text: 'Astrophotography',
  },
  {
    images: [
      '/images/project6-1.jpg',
      '/images/project6-2.jpg',
      '/images/project6-3.jpg',
    ],
    text: 'Sports Photography',
  },
  {
    images: [
      '/images/project7-1.jpg',
      '/images/project7-2.jpg',
      '/images/project7-3.jpg',
    ],
    text: 'Travel Photography',
  },
  {
    images: [
      '/images/project8-1.jpg',
      '/images/project8-2.jpg',
      '/images/project8-3.jpg',
    ],
    text: 'Newborn Photography',
  },
  {
    images: [
      '/images/project9-1.jpg',
      '/images/project9-2.jpg',
      '/images/project9-3.jpg',
    ],
    text: 'Pet Photography',
  },
];


  const [activeIndexes, setActiveIndexes] = useState(
    projectsData.map(() => 0)
  );

  const handlePrev = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, i) =>
        i === index ? (prevIndex === 0 ? projectsData[i].images.length - 1 : prevIndex - 1) : prevIndex
      )
    );
  };

  const handleNext = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, i) =>
        i === index ? (prevIndex === projectsData[i].images.length - 1 ? 0 : prevIndex + 1) : prevIndex
      )
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndexes((prevIndexes) =>
        prevIndexes.map((prevIndex, i) =>
          prevIndex === projectsData[i].images.length - 1 ? 0 : prevIndex + 1
        )
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id='projects' className="Pro">
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-carousel">
            <img
              src={project.images[activeIndexes[index]]}
              alt={`Project ${index + 1}`}
              className="project-image"
            />
            <button onClick={() => handlePrev(index)} className="carousel-button carousel-prev">
              {'<'}
            </button>
            <button onClick={() => handleNext(index)} className="carousel-button carousel-next">
              {'>'}
            </button>
          </div>
          <p className="project-description">{project.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;