import React from 'react';
import authService from '../../hooks/authService';

const Account = () => {
  const auth = authService();

  const handleLogout = () => {
    auth.logout();
  }

  return (
    <div className="container">
      <h1>Account page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
