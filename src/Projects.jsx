import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "The Cat's Meow",
      description: "An informational website with all kinds of info about owning cats, with interactive HTML elements and cute CSS design.",
      image: "./CatsMeowSS.png",
    },
    {
      id: 2,
      title: "Toyota Corolla SE",
      description: "An informational website for the Toyota Corolla SE, with interactive embed video and slideshow.",
      image: "./ToyotaSiteSS.png",
    },
    {
      id: 3,
      title: "Dog Image Gallery",
      description: "A website for 'fetching' a specified number of images of dogs by breed.",
      image: "./DogGallerySS.png",
    },
    {
      id: 4,
      title: "PokéRandom",
      description: "A work-in-progress side project to use random Pokémon-related events in a game, fetching data from a JSON and outputting it to the site's display at random.",
      image: "./PokéRandomSS.png",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="pageTitleWhite">&lt; projects &gt;</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={`${project.title} Screenshot`} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
