import React from "react";
import Image, { StaticImageData } from "next/image";
import githubIco from "@/images/icons/github.svg";

interface ProjectSkillProps {
  skill: string;
}

interface ProjectSkillsProps {
  skills: string[];
}

interface ProjectLinksProps {
  links: {
    github: string;
    preview: string;
  };
}

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  skills: string[];
  links: {
    github: string;
    preview: string;
  };
}

interface ProjectsProps {
  projects: {
    image: StaticImageData;
    title: string;
    description: string;
    skills: string[];
    links: {
      github: string;
      preview: string;
    };
  }[];
}

const ProjectSkill = ({ skill }: ProjectSkillProps) => {
  return <span className="project-skill">{skill}</span>;
};

const ProjectSkills = ({ skills }: ProjectSkillsProps) => {
  return (
    <div className="project-skills">
      {skills.map((skill, index) => (
        <ProjectSkill skill={skill} key={index} />
      ))}
    </div>
  );
};

const ProjectLinks = ({ links }: ProjectLinksProps) => {
  const { github } = links;
  return (
    <div className="project-links">
      {/* <a
        href={preview}
        rel="noopener noreferrer"
        target="_blank"
        className="project-link"
      >
        Live Demo <Image src={liveIco} alt="Live demo" width={16} height={14} />
      </a> */}
      <a
        href={github}
        rel="noopener noreferrer"
        target="_blank"
        className="project-link secondary"
      >
        <Image src={githubIco} alt="Live demo" width={14} height={14} /> View
        Source
      </a>
    </div>
  );
};

const ProjectCard = ({
  image,
  title,
  description,
  skills,
  links,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <ProjectSkills skills={skills} />
        <ProjectLinks links={links} />
      </div>

      <Image className="project-image" src={image} alt={title} />
      <div className="project-background" />
      
    </div>
  );
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="projects-container">
      {projects.map((proj) => (
        <ProjectCard
          key={proj.title}
          title={proj.title}
          description={proj.description}
          skills={proj.skills}
          links={proj.links}
          image={proj.image}
        />
      ))}
    </div>
  );
};

export default Projects;
