import { FC } from "react";
import BouncingLine from "./Animation/BouncingLine";
import { AnimatedText } from "./Animation/AnimatedText";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRightToLine } from "lucide-react";

export interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectTags: string[];
  link: string;
  delay?: number;
}

const ProjectCard: FC<ProjectCardProps> = ({
  projectDescription,
  projectTags,
  projectTitle,
  delay,
  link,
}) => {
  return (
    <div className="flex justify-between flex-col gap-10 sm:flex-row sm:gap-10 items-center w-full">
      <div className={"flex flex-col items-end w-4/5 gap-10"}>
        <BouncingLine />
        <div className={"flex flex-col gap-3 w-full justify-center"}>
          <p className="text-md">{projectTitle}</p>
          <AnimatedText
            text={projectDescription}
            once={true}
            delay={delay}
            staggerVelocity={0.01}
            className="m-0 text-3xl sm:ml-8"
          />
        </div>
        <div className={"flex flex-wrap gap-3"}>
          {projectTags.map((tag, index) => {
            return (
              <Badge className="uppercase" key={projectTitle + tag}>
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>
      <Button>
        <Link className="flex gap-2" href={link} target="_blank">
          <p>See more</p>
          <ArrowRightToLine />
        </Link>
      </Button>
    </div>
  );
};

export default ProjectCard;
