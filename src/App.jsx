import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faLock, faComputer } from '@fortawesome/free-solid-svg-icons';
import './App.css'

const App = () => {
  
  // To handle Navigation bar opaqueness while scrolling
  const[navBarBackground, setNavBarBackground] = useState('transparent');
  useEffect(() => {
    const handleUserScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {setNavBarBackground('#2c3e50');}
      else {setNavBarBackground('transparent')}
    };

    window.addEventListener('scroll', handleUserScroll, {passive:true});

    return () => window.removeEventListener('scroll', handleUserScroll);

    },[]);

  return (
    <div className='bg'>
      <nav className='navBar' style={{backgroundColor: navBarBackground, textAlign: "center"}}>
          <ul className='ulNav'>
            <Link className='navItem' to='/'>
            <FontAwesomeIcon icon={faHome} /><br></br>Home
            </Link> <br />
            <Link className='navItem' to='/about'>
            <FontAwesomeIcon icon={faInfoCircle} /><br></br>About
            </Link> <br />
            <Link className='navItem' to='/projects'>
            <FontAwesomeIcon icon={faComputer} /><br></br>Projects
            </Link> <br />
            <Link className='navItem' to='/experience'>
            <FontAwesomeIcon icon={faLock} /><br></br>Experience
            </Link> <br />
          </ul>
        </nav>

        <div className='centered-block'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </div>
        {/* <footer>Test</footer> */}
    </div>
  )
}

export default App
