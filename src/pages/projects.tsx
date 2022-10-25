import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

type Project = {
  name: string;
  description: string;
  details: string[];
};

function ProjectElement({ project }: { project: Project }) {
  const [isActive, setIsActive] = useState(false);
  const details = project.details.map((note, key) => (
    <li key={key} className="p-1">• {note}</li>
  ));
  const content = (
    <div>
      <p className="italic">"{project.description}"</p>
      <ul>{details}</ul>
    </div>
  );
  //Auto animate
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="m-accordion-item" ref={parent}>
      <div className="m-accordion-title flex justify-between" onClick={() => setIsActive(!isActive)}>
        <h3 className="text-2xl">{project.name}</h3>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="m-accordion-content">{content}</div>}
    </div>
  );
}

export default function Projects() {
  const myProjects: Project[] = [
    {
      name: "Document Generator",
      description:
        "Process given text into a predefined layout and saves as Image file",
      details: [
        "Built using native android and graphics moduels",
        "Implemented dynamic programming based text justification algorithm",
      ],
    },
    {
      name: "Current Affairs",
      description:
        "Android application for reading & practicing dialy current affairs.",
      details: [
        "Daily, Weekly, & Monthly tests",
        "Native android",
        "React based dashboard",
        "Firebase for storing data & authentication"
      ],
    },
    {
      name: "Silkroad",
      description:
        "Cross platform moblile Application for e-commerce",
      details: [
        "Stores can create an account and register",
        "Delivery partners can create an account and register",
        "Geo cordinate based finding algorithm for efficient searching & routing",
        "Microservice based architecture",
        "Express, Postgres, RabbitMQ, & Sequelize",
        "Flutter based mobile apps for customers, stores, & delivery partners",
        "Docker, Kubernetes, & AWS"
      ],
    },
    {
      name: "Earthrich",
      description:
        "Web application for an architect",
      details: [
        "NestJS, Postgres & Sequelize",
        "Dashboard with angular",
        "Docker, Kubernetes, & AWS"
      ],
    },
    {
      name: "Junction",
      description:
        "Programattic ad-campaign delivery network",
      details: [
        "Mutli user web application and delivery network",
        "Multiple services and workers",
        "Inversify, Express, Postgres, Fastify, & Sequelize",
        "Dashboard with angular",
        "Docker, Kubernetes, & AWS"
      ],
    }
  ];
  const projectElements = myProjects.map((project, key) => (
    <ProjectElement key={key} project={project} />
  ));
  return (
    <div className="mt-16 flex flex-col items-center">
      <h1 className="text-3xl mb-4 font-bold">Projects</h1>
      {projectElements}
    </div>
  );
}
