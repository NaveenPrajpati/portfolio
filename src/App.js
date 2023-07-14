import logo from './logo.svg';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skillsection from './components/Skillsection';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className='w-full '>
  <Navbar/>
    <div className="w-full sm:w-9/12  mx-auto p-3 mt-32">
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
