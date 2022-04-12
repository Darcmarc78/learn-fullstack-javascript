import React from 'react';
import propTypes from 'prop-types';

const Header = ({message}) => {
  return (
    <div>
      <h2 className="text-center">
        {message}
      </h2>
      <title>
        {message}
      </title>    
    </div>
    
  );
};

Header.propTypes = {
  message: propTypes.string
};

export default Header;