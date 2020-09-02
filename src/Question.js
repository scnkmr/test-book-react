import React from 'react';
import './Question.css';
class Option extends React.Component{
	render(){
		return (
			<div className="option_container">
				<span className="option_index_className">{this.props.index}</span>
				<input type="radio" name={this.props.index} value={this.props.React_optionid}/>
				<span className="option">{this.props.optionText}</span>
			</div>
		);
	}
}
class Question extends React.Component {
	checkQuestionType = (props) => {
		if(this.props.type==="mcq"){
			return (
				this.props.options.map(option => (
				<Option 
				index={this.props.index}
				question_id={this.props.Questionid_for_option_name} 
				optionText={option.option} 
				key={option.optionid} 
				React_optionid={option.optionid}/>
			))
			);
		}
	}
	clearSelection = (props) =>{
		Array.from( document.querySelectorAll(`input[name="${this.props.index}"]:checked`), input => input.checked = false );
	}
  render(){
	  return (
	  <div className="question_group">
	  <div className="question_container">
		<span className="Question_index_classname">{this.props.index+1}</span>
		{this.props.question}
		<span className="points">{this.props.marks} Marks</span>
	  </div>
			{this.checkQuestionType(this.props)}
		<button onClick={() => this.clearSelection(this.props)}>Clear selection</button>
	  </div>
		);
	}
}
export default Question;
