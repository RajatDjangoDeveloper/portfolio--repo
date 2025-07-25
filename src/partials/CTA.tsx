import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          ✉️ Stay in the <GradientText>Loop</GradientText>
        </>
      }
      description="Get updates on my latest projects, backend tips,
                     DevOps practices, and cloud-native development — straight to your inbox."
    />
  </Section>
);

export { CTA };
