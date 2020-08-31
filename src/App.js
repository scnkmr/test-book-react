import React from 'react';
import './App.css';
import Question from './Question';

class App extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoded: false,
			questions: []
		}
	}
	componentDidMount(){
		fetch("http://localhost:81/test-book-backend/questions.php") //http://testbook.epizy.com/main.php?testid=2068
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
    return (
    <div className="App">
      <div className="title">{this.props.title}</div>
      {questions.map(question_react_var => (
      <Question question={question_react_var.question} marks={question_react_var.question.marks} options={question_react_var.options}/>
      ))}
    </div>
  );
  }
    }
}

export default App;
