import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { FaGithub } from "react-icons/fa6";

const ThreeDCard = ({ title, description, imgUrl }) => {
  return (
    <CardContainer className=" max-w-[350px] max-h-[285px]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {/* Make things float in air */}
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {/* Hover over this card to unleash the power of CSS perspective */}
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-3">
          <img
            src={imgUrl}
            height="200"
            width="200"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-3">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →{/* {demo} */}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="flex items-center px-3 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <FaGithub className="mr-1" />
            Code
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export const ProjectGrid = () => {
  const url =
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const projects = [
    {
      title: "ai food chef",
      description: "A food app that recommends recipes.",
      imgUrl: url,
    },
    {
      title: "WeatherApp",
      description: "An app that displays weather information.",
      imgUrl: url,
    },
    {
      title: "TaskManager",
      description: "A task management application.",
      imgUrl: url,
    },
    {
      title: "E-commerce Store",
      description: "An online store for buying and selling products.",
      imgUrl: url,
    },
    {
      title: "E-commerce Store",
      description: "An online store for buying and selling products.",
      imgUrl: url,
    },
    {
      title: "E-commerce Store",
      description: "An online store for buying and selling products.",
      imgUrl: url,
    },
  ];
  return (
    <div>
      <h1 className="text-center pt-5 text-white text-4xl md:text-6xl font-raleway mt-10">
        PROJECTS
      </h1>
      {/* <SparklesPreview /> */}
      <div
        className="grid grid-cols-1 md:gap-x-12 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
        name="project"
      >
        {projects.map((project, index) => (
          <ThreeDCard
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
