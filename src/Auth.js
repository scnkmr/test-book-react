import React from 'react';

function Signin(){
    return (
        <div>
            <form>
                <input type="email" placeholder="Email"/><br/>
                <input type="password" placeholder="Password"/><br/>
                <input type="submit"/>
            </form>
        </div>
    );
}
class Signup extends React.Component{
    render(){
    return (
        <div>
            <form>
                <input type="email" required placeholder="Email" value={this.props.Email_props} onChange={this.props.Change_email_props}/><br/>
            </form>
        </div>
    );}
}
class Auth extends React.Component {
    constructor(props){
        super(props);
        //this.handleClick = this.handleClick.bind(this);
        this.state = {
            signin_toogle : true,
            login_user:{
                User_id:'',
                Email:'',
                First_name:'',
                Last_name: '',
                Email_verified:''
            },
            register_user:{
                Email:'sachin',
                First_name:'',
                Last_name:'',
                Password:''
            }
        }
    }
      change_to_signup = () => {
        this.setState(prevState => ({
          signin_toogle: !prevState.signin_toogle
        }));
      }

      handle_change_value = e => this.setState({register_user:{Email: e.target.value}});
  render(){
      let button;
      let button_text;
      if(this.state.signin_toogle){
          button=<Signin/>;
          button_text = "Haven't an Account? Create Account";
      }
      else{
          button = <Signup Email_props={this.state.register_user.Email} Change_email_props={this.handle_change_value}/>;
          button_text = "Already Have Account? Signin Here";
      }
    return (
    <div>
      <div>Sign In</div>
      <button onClick={this.change_to_signup}>{button_text}</button>
      {button}
      {this.state.register_user.Email}
        <br/>
            
    </div>
  );
  }
    }

export default Auth;
