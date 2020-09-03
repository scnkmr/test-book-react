import React from 'react';
import './App.css';
import Question from './Question';

class App extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoded: false,
			questions: [],
			responses: [{}]
		}
	}
	componentDidMount(){
		fetch("http://localhost:81/test-book-backend/questions.php")
		.then(res => res.json())
		.then(
			(result) => {
				  this.setState({
					isLoaded: true,
					questions: result.questions
				  });
				},
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
    return (
    <div className="App">
      <div className="title">{this.props.title}</div>
      {questions.map((question_react_var, index) => (
				<Question 
				index={index}
				question={question_react_var.question} 
				marks={question_react_var.marks} 
				options={question_react_var.optionsGroup} 
				type={question_react_var.questionType} 
				key={question_react_var.questionid} 
				Questionid_for_option_name={question_react_var.questionid}/>
			))}
			<button>Submit</button>
    </div>
  );
  }
    }
}

export default App;
