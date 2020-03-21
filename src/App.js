import React, { useState } from 'react';
import useLiff from './hooks/useLiff';

const liffId = process.env.REACT_APP_LIFF_ID;

function App() {
  const { loading, error, profile, fetchProfile, sendMessage } = useLiff({
    liffId,
  });
  const [text, setText] = useState('');

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>Hello LIFF</h1>
      <section>
        <button onClick={() => fetchProfile()}>Get Profile</button>
        {profile && (
          <div>
            <p>UserID: {profile.userId}</p>
            <p>DisplayName: {profile.displayName}</p>
            <p>
              Picture: <br />
              <img src={profile.pictureUrl} height="300" width="300" />
            </p>
            {profile.statusMessage && (
              <p>StatusMessage: {profile.statusMessage}</p>
            )}
          </div>
        )}
      </section>
      <section>
        <input onChange={e => setText(e.target.value)} />
        <button onClick={() => sendMessage({ text })}>Send</button>
      </section>
    </div>
  );
}

export default App;
