import propTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return (
    <h2 className="text-center">
            
      {props.headerMessage}
    </h2>

  );
};

App.propTypes = {
  headerMessage: propTypes.string
};

ReactDOM.render(
  <App headerMessage="Finally" />,
  document.getElementById('root')
);