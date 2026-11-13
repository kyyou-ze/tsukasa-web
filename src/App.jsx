import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Commands from './components/Commands.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Status from './components/Status.jsx';
import Faq from './components/Faq.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Commands />
        <HowItWorks />
        <Status />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
