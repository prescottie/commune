import React, {Component} from 'react';
import NavBar from '../NavBar.jsx';
import HomePage_Banner from './HomePage_Banner.jsx';
import HomePage_Events from './HomePage_Events.jsx';

class HomePage extends Component {

  render() {
    return (
      <div className="wrapper">
        <NavBar getSearchResults = {this.props.getSearchResults} />
        <HomePage_Banner getSearchResults = {this.props.getSearchResults}  />
        <HomePage_Events 
          previewEvents={this.props.previewEvents}
        />
      </div>  
    );
  }
}

export default HomePage;
