import React from 'react';
import './App.css';
import Question from './Question';

class App extends React.Component {
  render(){
	  return (
    <div className="App">
      <div className="title">{this.props.title}</div>
	  <Question/>
	  <Question/>
    </div>
  );
  }
}

export default App;
