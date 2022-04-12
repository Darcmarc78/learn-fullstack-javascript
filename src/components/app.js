import React from 'react';
import propTypes from 'prop-types';
import Header from './header';

const App = () => {
  return (
    <div>
      <Header message="Naming Contests" />
        
      <div>
        ...
      </div>  
    </div>
      
  );
};
  
App.propTypes = {
  headerMessage: propTypes.string
};
  
App.defaultProps = {
  headerMessage: 'Hello!! Default Value'
};

export default App;