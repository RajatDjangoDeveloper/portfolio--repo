import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Inventory Mangement"
        description="Developed a comprehensive Inventory Management System to efficiently track,
                    manage, and maintain records of organizational assets, ensuring accurate asset allocation,
                    real-time updates, seamless reporting, and improved resource utilization."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>Django</Tags>
            <Tags color={ColorTags.RED}>DRF</Tags>
            <Tags color={ColorTags.EMERALD}>Python</Tags>
            <Tags color={ColorTags.FUCHSIA}>JavaScript</Tags>
            <Tags color={ColorTags.LIME}>HTML</Tags>
            <Tags color={ColorTags.SKY}>CSS</Tags>
          </>
        }
      />
      <Project
        name="Career Path Adviser"
        description="Developed a Career Path Adviser tool that assists users in finding job opportunities
                    and relevant courses. The system uses third-party APIs to suggest tailored career paths
                    and learning resources based on user survey responses, with real-time search results 
                    displayed to the user."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>Ruby</Tags>
            <Tags color={ColorTags.RED}>Ruby on Rails</Tags>
            <Tags color={ColorTags.VIOLET}>Google API</Tags>
            <Tags color={ColorTags.SLATE}>JSON</Tags>
            <Tags color={ColorTags.YELLOW}>API Integration</Tags>
            <Tags color={ColorTags.LIME}>Backend Development</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
