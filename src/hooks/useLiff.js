import { useState, useEffect } from 'react';
import { liff } from '../lib/liff';

function useLiff({ liffId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  const initLiff = async ({ liffId }) => {
    setLoading(true);
    try {
      await liff.init({ liffId });
      console.log('success liff init');
    } catch (error) {
      console.log({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfile = async () => {
    setLoading(true);
    try {
      setProfile(await liff.getProfile());
    } catch (error) {
      console.log({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async ({ text }) => {
    setLoading(true);
    try {
      liff.sendMessages([{ type: 'text', text }]);
      console.log(`success send message: ${text}`);
    } catch (error) {
      console.log({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (liffId) initLiff({ liffId });
  }, [liffId]);

  return {
    loading,
    error,
    fetchProfile,
    profile,
    sendMessage,
  };
}

export default useLiff;
