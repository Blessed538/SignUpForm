import React, { Component } from 'react'
import SignIn from './Authentication/SignIn/SignIn';
import { auth } from './Authentication/SignIn/Firebase/Firebase.utilts';
import Header from './components/Header';


class Main extends Component {

  state ={
    currentUser: null
  }

  unsubscribeFromAuth = null

 componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
     this.setState({currentUser:user})
     console.log(user);

   })
 }


 componentWillMount(){
   this.unsubscribeFromAuth();
 }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <SignIn />
      </div>
    )
  }
}

export default Main;