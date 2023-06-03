import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skillsection from './components/Skillsection';
import ProjectSection from './components/ProjectSection';
import About from './components/About';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className=' '>
  <Navbar/>
    <div className="w-[90%] mx-auto ">
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
