import TiltedCard from './Animations/TiltedCard';

type Projects = {
  title: string,
  description: string,
  imageSrc: string,
  altText: string,
  captionText: string,
  containerHeight: string,
  containerWidth: string,
  imageHeight: string,
  imageWidth: string,
  rotateAmplitude: number,
  scaleOnHover: number,
  showMobileWarning: boolean,
  showTooltip: boolean,
  displayOverlayContent: boolean,
  overlayContent: React.ReactNode
}

const projects: Projects[] = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    imageSrc: "/assets/shabani.jpeg",
    altText: "Project 1 Image",
    captionText: "Project 1",
    containerHeight: "300px",
    containerWidth: "300px",
    imageHeight: "300px",
    imageWidth: "300px",
    rotateAmplitude: 12,
    scaleOnHover: 1.2,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: <p className="tilted-card-demo-text font-gotham-light">Project 1</p>
  },
  {
    title: "Project 1",
    description: "Description of Project 1",
    imageSrc: "/assets/shabani.jpeg",
    altText: "Project 1 Image",
    captionText: "Project 1",
    containerHeight: "300px",
    containerWidth: "300px",
    imageHeight: "300px",
    imageWidth: "300px",
    rotateAmplitude: 12,
    scaleOnHover: 1.2,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: <p className="tilted-card-demo-text font-gotham-light">Project 1</p>
  },
  {
    title: "Project 3",
    description: "Description of Project 1",
    imageSrc: "/assets/shabani.jpeg",
    altText: "Project 1 Image",
    captionText: "Project 1",
    containerHeight: "300px",
    containerWidth: "300px",
    imageHeight: "300px",
    imageWidth: "300px",
    rotateAmplitude: 12,
    scaleOnHover: 1.2,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: <p className="tilted-card-demo-text font-gotham-light">Project 1</p>
  },
  {
    title: "Project 4",
    description: "Description of Project 1",
    imageSrc: "/assets/shabani.jpeg",
    altText: "Project 1 Image",
    captionText: "Project 1",
    containerHeight: "300px",
    containerWidth: "300px",
    imageHeight: "300px",
    imageWidth: "300px",
    rotateAmplitude: 12,
    scaleOnHover: 1.2,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true,
    overlayContent: <p className="tilted-card-demo-text font-gotham-light">Project 1</p>
  },
];

export const ProjectsSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 lg:px-0 lg:max-w-4xl mx-auto min-h-[700px]">
      <h2 className="font-gotham text-3xl lg:text-4xl mb-8">Projects</h2>
      <div className="flex flex-row gap-4 overflow-x-auto no-scrollbar pb-4 w-full">
        {projects.map((project, index) => (
          <TiltedCard
            key={index}
            imageSrc={project.imageSrc}
            altText={project.altText}
            captionText={project.captionText}
            containerHeight={project.containerHeight}
            containerWidth={project.containerWidth}
            imageHeight={project.imageHeight}
            imageWidth={project.imageWidth}
            rotateAmplitude={project.rotateAmplitude}
            scaleOnHover={project.scaleOnHover}
            showMobileWarning={project.showMobileWarning}
            showTooltip={project.showTooltip}
            displayOverlayContent={project.displayOverlayContent}
            overlayContent={project.overlayContent}
          />
        ))}
      </div>
    </section>
  );
}