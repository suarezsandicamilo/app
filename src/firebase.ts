//

// https://firebase.google.com/docs/web/setup

import config from './../config/firebase.json';

import * as firebase from 'firebase/app';

import * as firestore from 'firebase/firestore';

const app = firebase.initializeApp({ ...config });

const db = firestore.getFirestore(app);

export { firebase, firestore, app, db };
