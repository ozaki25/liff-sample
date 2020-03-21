import { useState, useEffect } from 'react';
import { liff } from '../lib/liff';

function useLiff({ liffId }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const initLiff = async ({ liffId }) => {
    setLoading(true);
    try {
      await liff.init({ liffId });
      console.log('success liff init');
      if (liff.isLoggedIn()) {
        console.log('logged in!');
        setResult(true);
      } else {
        console.log('not logged in');
        liff.login();
      }
    } catch (error) {
      console.log({ error });
      setResult(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initLiff({ liffId });
  }, [liffId]);

  return { loading, result };
}

export default useLiff;
