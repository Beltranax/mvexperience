"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Luis Miguel 2024",
    description: "Luis Miguel - Dates available",
    image: "/images/projects/luis-miguel-preventa.jpg",
    tag: ["All", "Concert"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Bad Bunny 2024",
    description: "Bad Bunny Houston",
    image: "/images/projects/Bad-Bunny.jpg",
    tag: ["All", "Concert"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "F1 - Miami 2024",
    description: "Various Dates Available",
    image: "/images/projects/f1-miami.png",
    tag: ["All", "Sport"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "F1 - Mexico 2024",
    description: "Various Dates Available",
    image: "/images/projects/f1-mex.jpg",
    tag: ["All", "Sport"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Olivia Rodrigo - 2024",
    description: "LA Kia Stadium",
    image: "/images/projects/olivia.png",
    tag: ["All", "Concert"],
    gitUrl: "/",
    previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Sport"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Events
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Sport"
          isSelected={tag === "Sport"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Concert"
          isSelected={tag === "Concert"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;