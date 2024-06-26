import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className='centered-block'>
      <h1 style={{textDecorationLine: "underline"}}>404 Error: Page Not Found</h1>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable. <br></br>Please return to the home page <Link className='myLink' to='/'>here
      </Link>.
      </p>
      {/* <img height="500" width="500" src="../../sad-face.jpg" /> */}
      
    </div>
  );
};

export default NoMatch;
