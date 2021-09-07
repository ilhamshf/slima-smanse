import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Welcome to <br />
        X MIPA 5 SMANSE Official Website
        </SectionTitle>
        <SectionText>
        This website was created with the aim of making it easier to provide information about classes and others. In the future, we will also interact with slima.smanse Instagram posts so that they can be accessed via the web. Klo ga males xixixi
        </SectionText>
        <Button onClick={() => alert('yang buat ganteng yahaha yamete kudasi')}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;