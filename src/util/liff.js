import { liff } from '../lib/liff';

const liffId = process.env.REACT_APP_LIFF_ID;

export async function initializeLiff() {
  console.log({ liffId });
  try {
    await liff.init({ liffId });
    console.log('success liff init');
    if (!liff.isLoggedIn()) {
      console.log('not logged in');
      liff.login();
    }
    console.log('logged in!');
  } catch (error) {
    console.log({ error });
  }
}
