import { FC } from "react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

interface MyProjectsProps {}

const mockProjects: ProjectCardProps[] = [
  {
    projectTitle: "Personal Blog",
    projectDescription:
      "My blog where I teach about frontend development and other things I like.",
    projectTags: ["Blog", "Full-stack", "Headless CMS", "Next13"],
    link: "https://blog.luccaparadeda.com/",
  },
  {
    projectTitle: "PHdaquimica",
    projectDescription:
      "A landing page made for a chemistry teacher to sell their courses.",
    projectTags: ["landing-page", "nextjs13", "Frontend"],
    link: "https://github.com/Luccatp/phdaquimica/tree/main",
  },
  {
    projectTitle: "PUCRS Museum",
    projectDescription:
      "A web system to create and manage visits to the PUCRS Museum.",
    projectTags: ["Full-stack", "CI-CD"],
    link: "https://tools.ages.pucrs.br/agendamento-de-visitas-de-escola-ao-museu",
  },
  {
    projectTitle: "PDF Buddy",
    projectDescription:
      "A chatbot to chat with your PDFs. It can give you answers about them and much more!",
    projectTags: ["AI", "Full-stack", "Next13"],
    link: "https://github.com/Luccatp/PDFbuddy",
  },
];

const MyProjects: FC<MyProjectsProps> = ({}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-20 text-4xl">My Projects</h2>
      <div className="grid gap-20">
        {mockProjects.map((project, index) => {
          return (
            <ProjectCard
              key={index + project.projectTitle}
              projectDescription={project.projectDescription}
              projectTags={project.projectTags}
              projectTitle={project.projectTitle}
              link={project.link}
              delay={index * 0.7}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
