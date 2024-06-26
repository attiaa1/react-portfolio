import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Experience from './components/Experience';
import Software from './components/Software';
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
          <Link className='navItem' to='/software'>
          <FontAwesomeIcon icon={faComputer} /> SW
          </Link> <br />
          <Link className='navItem' to='/experience'>
          <FontAwesomeIcon icon={faLock} /> Experience
          </Link> <br />
          <Link className='navItem' to='/about'>
          <FontAwesomeIcon icon={faInfoCircle} /> About
          </Link> <br />
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/software' element={<Software />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
