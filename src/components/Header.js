import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/storage">Stored Profile</Link>
    </div>
  );
}

export default Header;
