import React, { useState } from 'react';
import { useAuthenticate, useGetUsers } from '../reducers/users/hooks';
import { Backdrop, CircularProgress, TextField, Button, Typography } from '@material-ui/core';

import users from '../_data/users.json';

const Authentication = ({ children }: { children: React.ReactNode }) => {
  useGetUsers();
  const { authenticated, authenticate, errorMessage, loading } = useAuthenticate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    authenticate(username, password);
  };
  if (authenticated) {
    return <div>{children}</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <Backdrop open={!!loading}>
        <CircularProgress />
      </Backdrop>
      <TextField
        type="text"
        label="Username"
        fullWidth
        value={username}
        onChange={e => setUsername(e.target.value)}
        disabled={!!loading}
        required
      />

      <TextField
        type="password"
        label="Password"
        fullWidth
        value={password}
        onChange={e => setPassword(e.target.value)}
        disabled={!!loading}
        required
      />

      <Button type="submit">Login</Button>

      {errorMessage && (
        <Typography variant="h5" color="error">
          {errorMessage}
        </Typography>
      )}

      <div>
        <h4>Initial Users</h4>
        {users.map(user => (
          <div key={user.id}>
            <div>Username: {user.username}</div>
            <div>Password: {user.password}</div>
            <div>Role: {user.role}</div>
            <br />
          </div>
        ))}
      </div>
    </form>
  );
};

export default Authentication;
