import logo from './logo.svg';
import './App.css';
import './scrollBar.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Resume from './component/Resume/Resume';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import MyContact from './component/MyContact/MyContact';
import Footer from './component/Footer/Footer';
import Particle from './component/Particle';

function App() {
  return (
    <div className='main'>
      {/* <Particle /> */}
      <Navbar/>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      {/* <Contact/> */}
      <MyContact/>
      <Footer/>
    </div>
  );
}

export default App;
