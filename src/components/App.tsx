import './App.scss';
import React, { FC, useEffect, useState } from 'react';
import { Dashboard } from './Dashboard/Dashboard';
import { userInfo } from '../stateUser/userInfo';
import { UserContext } from '../hooks/UserContext';
import { ContentWrapper } from './ContentWrapper/ContentWrapper';
import { MainTitle } from './MainTitle/MainTitle';
import { MainContent } from './MainContent/MainContent';
import { OPEN_MODAL } from '../types/OpenModal';

const App: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  useEffect(() => {
    if (toggleMenu) document.body.classList.add(OPEN_MODAL);
    return () => document.body.classList.remove(OPEN_MODAL);
  }, [toggleMenu]);

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
