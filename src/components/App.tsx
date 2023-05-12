import './App.scss';
import React, { FC, useState } from 'react';
import { Dashboard } from './Dashboard/Dashboard';
import { userInfo } from '../stateUser/userInfo';
import { UserContext } from './UserContext/UserContext';
import { ContentWrapper } from './ContentWrapper/ContentWrapper';
import { MainTitle } from './MainTitle/MainTitle';
import { MainContent } from './MainContent/MainContent';

const App: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <UserContext.Provider value={userInfo}>
      <div className="App">
        <Dashboard toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <ContentWrapper setToggleMenu={setToggleMenu}>
          <MainTitle />
          <MainContent />
        </ContentWrapper>
      </div>
    </UserContext.Provider>
  );
}

export default App;
