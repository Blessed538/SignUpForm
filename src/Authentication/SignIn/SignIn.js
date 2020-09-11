import React from 'react';
import './SignIn.css';
import CustomButton from './CustomButton/CustomButton';
import { signInWithGoogle } from './Firebase/Firebase.utilts';

class SignIn extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ name: '', email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <h2>Login Form</h2>
            <label htmlFor="uname">
              <b>Username</b>
            </label>

            <input
              onChange={this.handleChange}
              type="name"
              value={this.state.name}
              placeholder="Enter Username"
              name="name"
              required
            />

            <label htmlFor="psw">
              <b>Email</b>
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              // value={this.state.email}
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              // value={this.state.password}
              required
            />

          
             <div className='sign'>
               <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle}>Sign In With Google </CustomButton>
             </div>
            

           
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
