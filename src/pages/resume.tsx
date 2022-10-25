function Item({ title, itemLabels }: { title: string; itemLabels: string[] }) {
  const itemElements = itemLabels.map((label, key) => (
    <span key={key}>
      •<span className="green-text pr-2">{label}</span>
    </span>
  ));
  return (
    <>
      <h1 className="pt-2 text-2xl font-bold">{title}</h1>
      <h4 className="text-xl">{itemElements}</h4>
    </>
  );
}

export default function Resume() {
  const programmingLanguages = ["Javascript", "Python", "Java"];
  const interests = [
    "Database",
    "Data Structures & Algorithms",
    "Design Patterns",
    "Theory of Computation",
    "DevOps",
    "Distributed Computing",
  ];
  const backend = ["ExpressJS", "NestJS", "Fastify"];
  const frontend = ["Angular", "React", "NextJS", "Native Android"];
  const techs = [
    "NodeJS",
    "Postgres",
    "Docker",
    "Kubernetes",
    "RabbitMQ",
    "AWS",
  ];
  return (
    <div className="mt-16 flex flex-col items-center">
      <Item title="Programming Languages" itemLabels={programmingLanguages} />
      <Item title="Interests" itemLabels={interests} />
      <Item title="Backend" itemLabels={backend} />
      <Item title="Frontend" itemLabels={frontend} />
      <Item title="Technolgy" itemLabels={techs} />
    </div>
  );
}
