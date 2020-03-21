import React from 'react';
import useLiff from './hooks/useLiff';

const liffId = process.env.REACT_APP_LIFF_ID;

function App() {
  const { loading, result } = useLiff({ liffId });
  console.log({ loading, result });
  if (loading) return <p>...loading</p>;
  if (!result) return <p>Login Error</p>;
  return (
    <div>
      <h1>Hello LIFF</h1>
    </div>
  );
}

export default App;
