import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import { AboutMe } from './pages/AboutMe';
import { Home } from './pages/Home';

function App() {
    // const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return (
    <section 
      // ref={scrollRef}
      >
      <Home />
      <AboutMe />
    </section>
  )
}

export default App;
