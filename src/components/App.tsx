import './App.scss';
import React, { FC, createContext } from 'react';
import { Dashboard } from './Dashboard/Dashboard';
import { userInfo } from '../stateUser/userInfo';
import { UserInfoInterface } from '../interfaces/UserInfoInterface';

export const UserContext = createContext<UserInfoInterface>(userInfo);

const App:FC = () => {
  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <Dashboard />
      </UserContext.Provider>
    </div>
  );
}

export default App;
