import './App.scss';
import React, { FC } from 'react';
import { Dashboard } from './Dashboard/Dashboard';
import { userInfo } from '../stateUser/userInfo';
import { UserContext } from './UserContext/UserContext';
import { ContentWrapper } from './ContentWrapper/ContentWrapper';
import { MainTitle } from './MainTitle/MainTitle';
import { MainContent } from './MainContent/MainContent';

const App:FC = () => {
  return (
    <UserContext.Provider value={userInfo}>
      <div className="App">
        <Dashboard />
        <ContentWrapper>
          <MainTitle />
          <MainContent />
        </ContentWrapper>
      </div>
    </UserContext.Provider>
  );
}

export default App;
