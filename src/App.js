import './App.css';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import ResultCounter from './components/ResultCounter';
import BackToTop from './common/BackToTop';
import Preloader from './common/Preloader';

function App() {
  return (
 <>
 <Preloader/>
 <Hero/>
<ResultCounter/>
 <Testimonials/>
 <Accordion/>
 <Footer/>
 <BackToTop/>
 </>
  );
}

export default App;
