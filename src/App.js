import React from 'react';
import HomeScreen from './views/HomeScreen';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* 主要畫面 */}
      <HomeScreen></HomeScreen>
    </div>
  );
}

export default App;
