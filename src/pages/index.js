import Acomplishments from '../components/Acomplishments/Acomplishments';
import Prestasi from '../components/Prestasi/Prestasi';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Footer from '../components/Footer/Footer';
import Cr from '../components/Copyright/cr';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <Prestasi />
    </Layout>
  );
};

export default Home;
