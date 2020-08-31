import React from 'react';
import './Question.css';
class Option extends React.Component{
	render(){
		return (
			<div className="option_container">
				<input type="radio"/><span className="option">{this.props.optionText}</span>
			</div>
		);
	}
}
class Question extends React.Component {
	constructor(props){
		super(props);
	}
  render(){
	  return (
	  <div className="question_group">
	  <div className="question_container">
		{this.props.question}<span className="points">{this.props.marks}</span>
	  </div>
			{this.props.options.map(option => (<Option optionText={option}/>))}
		<button>Clear selection</button>
	  </div>
		);
	}
}

export default Question;
