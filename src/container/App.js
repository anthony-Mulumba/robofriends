//jshint esversion:6
//jshint esversion:8
import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield:''
    };
  }
//internal react function on Mounting
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots: users}));
}

  onSearchChange = (event) => {
    //console.log(event.target.value);
    this.setState({searchfield: event.target.value});
  };

  render(){
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    }
  );
  //console.log(filteredRobots);
  return !robots.length ?
    <h1>Loading...</h1> :
    (
     <div className="tc">
          <h1>Robot Friends</h1>
          <SearchBox searchchange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={ filteredRobots } />
          </ErrorBoundry>
        </Scroll>
     </div>
  );
  }

}

export default App;
//We return only one parent(E.g: <div></div> which will englobe all other html tag).
