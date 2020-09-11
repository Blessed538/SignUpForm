import React, { Component } from 'react'
import { auth } from '../SignIn/Firebase/Firebase.utilts';
import './header.css';


class Header extends Component {
  constructor(props){
    super(props);
  }


     render() {
     const {currentUser} = this.props;

    return 
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
        :
        <Link className='option' to='/signin'> SIGN IN </Link>
      }
      
     }
}


export default Header;