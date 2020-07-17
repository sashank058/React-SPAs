import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: '*************',
  authDomain: 'react-spas.firebaseapp.com',
  databaseURL: 'https://react-spas.firebaseio.com',
  projectId: 'react-spas',
  storageBucket: 'react-spas.appspot.com',
  messagingSenderId: '********'
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
