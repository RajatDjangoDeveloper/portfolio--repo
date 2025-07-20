import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Rajat</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a backend developer with a passion for building{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            scalable
          </a>{' '}
          and{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            performant systems
          </a>{' '}
          — now expanding my skills into the world of{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Cloud Engineering
          </a>
          . With experience in{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Django
          </a>
          ,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Node.js
          </a>{' '}
          and modern{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            DevOps practices
          </a>
            , I enjoy turning ideas into robust APIs and cloud-native applications.
            I'm always exploring ways to improve developer experience, automate deployments, and optimize infrastructure — from code to cloud.
        </>
      }

      // description={
      //   <>
      //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{' '}
      //     <a className="text-cyan-400 hover:underline" href="/">
      //       malesuada
      //     </a>{' '}
      //     nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
      //     <a className="text-cyan-400 hover:underline" href="/">
      //       consectetur
      //     </a>{' '}
      //     adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      //   </>
      // }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
