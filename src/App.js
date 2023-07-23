import logo from './logo.svg';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skillsection from './components/Skillsection';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className='w-[100%] '>
  <Navbar/>
    <div className="w-full sm:container  mx-auto p-3  sm:mt-32">
  <Hero/>
<Skillsection/>
  <About/>
<ProjectSection/>
    </div>
  <ContactMe/>
    </div>
  );
}

export default App;
