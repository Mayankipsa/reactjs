import React, { Component } from 'react';
import './App.css';
import  Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      {name:'Mayank',age:31},
      {name:'Shikha',age:30},
      {name:'Vinod',age:59},
      {name:'Lata',age:58}
    ],
    otherState:'Some Other Info'
  }

  switchNameHandler=()=>{
      console.log('Button clicked!');
      // this.state.persons[0].name="Honey"; //cannot mutate state directly like this
      this.setState({
        persons:[
          {name:'Honey',age:31},
          {name:'Chhutki',age:30},
          {name:'Badde',age:59},
          {name:'SnehLata',age:58}
        ]
      })

  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Adventure Sports</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
      
    );
  }
}

export default App;
