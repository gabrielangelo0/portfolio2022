import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import { AboutMe } from './pages/AboutMe';
import { Home } from './pages/Home';
import { Knowledge } from './pages/Knowledge';

function App() {
    // const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <section 
      // ref={scrollRef}
      >
      <Home />
      <AboutMe />
      <Knowledge />
    </section>
  )
}

export default App;
