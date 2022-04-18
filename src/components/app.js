import React from 'react';
import propTypes from 'prop-types';
import Header from './header';

//extend React.component
class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
                
        <div>
            ---
        </div>  
      </div>
              
    );
  } 
}
  
App.propTypes = {
  headerMessage: propTypes.string
};
  
App.defaultProps = {
  headerMessage: 'Hello!! Default Value'
};

export default App;