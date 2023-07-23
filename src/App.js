import logo from './logo.svg';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skillsection from './components/Skillsection';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className='w-[100%] bg-blue-200'>
  <Navbar/>
    <div className="w-full bg-green-200 sm:container  mx-auto p-3  sm:mt-32">
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
