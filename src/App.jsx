import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import Home from './pages/Home';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
