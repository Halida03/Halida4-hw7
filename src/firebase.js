import { initializeApp, getApps } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseApp = getApps().length
  ? getApps()[0]
  : initializeApp({
      apiKey: 'AIzaSyDxv47r3vITRhDkbF15fXsmEfCcTm8Vnmg',
      authDomain: 'ecommerce-a82de.firebaseapp.com',
      projectId: 'ecommerce-a82de',
      storageBucket: 'ecommerce-a82de.appspot.com',
      messagingSenderId: '534351897276',
      appId: '1:534351897276:web:24435cdb10c9be42b1e6b9',
    });

const provider = new GoogleAuthProvider();

export { provider };
export default firebaseApp;