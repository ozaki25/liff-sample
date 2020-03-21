import React from 'react';
import { initializeLiff } from './util/liff';

function App() {
  initializeLiff();
  return (
    <div>
      <h1>Hello LIFF</h1>
    </div>
  );
}

export default App;
