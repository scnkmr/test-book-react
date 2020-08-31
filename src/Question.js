import React from 'react';
import './Question.css';
class Option extends React.Component{
	render(){
		return (
			<div className="option_container">
				<input type="radio"/><span className="option">option</span>
			</div>
		);
	}
}
class Question extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoded: false,
			questions: []
		}
	}
	componentDidMount(){
		fetch("http://localhost:81/test-book/questions.php") //http://testbook.epizy.com/main.php?testid=2068
		.then(res => res.json())
		.then(
			(result) => {
				  this.setState({
					isLoaded: true,
					questions: result.questions
				  });
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
				  this.setState({
					isLoaded: true,
					error
				  });
				}
		)
	}
  render(){
	  const { error, isLoaded, questions } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
		console.log(questions[0].question);
	  return (
	  <div className="question_group">
	  {questions.map(questions_react_var => (questions_react_var.question))}
	  <div className="question_container">
		Questions<span className="points"> 2 Points</span>
	  </div>
		<Option/>
		<Option/>
		<button>Clear selection</button>
	  </div>
		);
	}
  }
}

export default Question;
