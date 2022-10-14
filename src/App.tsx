import { useRef } from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import { AboutMe } from './pages/AboutMe';
import { Home } from './pages/Home';
import { Knowledge } from './pages/Knowledge';
import { Projects } from './pages/Projects';

function App() {
  return (
    <section>
      <Home />
      <AboutMe />
      <Knowledge />
      {/* <Projects /> */}
    </section>
  )
}

export default App;
