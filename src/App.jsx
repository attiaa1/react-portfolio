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

  return (
    <div className='bg'>
      <nav className='navBar'>
          <ul>
            <Link className='navItem' to='/'>
            <FontAwesomeIcon icon={faHome} /> Home
            </Link> <br />
            <Link className='navItem' to='/about'>
            <FontAwesomeIcon icon={faInfoCircle} /> About Me
            </Link> <br />
            <Link className='navItem' to='/projects'>
            <FontAwesomeIcon icon={faComputer} /> Projects
            </Link> <br />
            <Link className='navItem' to='/experience'>
            <FontAwesomeIcon icon={faLock} /> Experience
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
    </div>
  )
}

export default App
