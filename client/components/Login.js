import React from 'react';
import { browserHistory } from 'react-router';

const Login = React.createClass({

  getInitialState() {
    return {
      form: {
        userid: '',
        pswrd: ''
      }
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.form.userid == "shaadi" && this.state.form.pswrd == "123")
      {
        localStorage.setItem("username", "shaadi");
        browserHistory.push('/dashboard');
      }
     else
      {
       alert("Error Password or Username")
      }
    this.refs.commentForm.reset();
  },

  handleInput(e,key) {
    var form=this.state.form;
    form[key]=e.target.value;
    this.setState({
      form
    });
  },

  render() {
    return (
      <div>
        <form name="login" id="formMain" onSubmit={this.handleSubmit} ref="commentForm">
          <div>
            Username<input type="text" name="userid" className="inputbx"  value={this.state.form.userid} onChange = { (e) => this.handleInput(e,'userid') }/>
          </div>
          <div>
            Password<input type="password" name="pswrd" className="inputbx" value={this.state.form.pswrd} onChange = { (e) => this.handleInput(e,'pswrd') }/>
          </div>
          <input type="submit" onclick="check(this.form)" value="Login" className="inputbx btn" />
          <input type="reset" value="Cancel" className="inputbx btn"/>
        </form>
      </div>
    );
  }
});

export default Login;
