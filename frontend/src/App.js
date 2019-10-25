import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <GlobalStyle />
    </>
  );
}

export default App;
