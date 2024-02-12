/*
 * Created Date: Friday, 5th February 2021, 1:06:30 am
 * Author: Kingsley Chimezie
 */


/* FIREBASE CONFIG
-------------------------------- */
const firebaseConfig = {
  apiKey: "AIzaSyDeaQLKMLg6pcPcpFroBDDAvLjMLmL3ed0",
  authDomain: "be-my-valentine-170b5.firebaseapp.com",
  projectId: "be-my-valentine-170b5",
  storageBucket: "be-my-valentine-170b5.appspot.com",
  messagingSenderId: "235091871151",
  appId: "1:235091871151:web:1a1c90e202167c1ecedb5a"
};


/* CLOUD FIRESTORE CONFIG
-------------------------------- */
const firestore = {
    collectionName: 'valentines',
    docID: 'test'
};


/* UI DATA
-------------------------------- */
const uiData = {
    valentinesFirstName: 'Ashley',
    valentinesLastName: 'Testington',
    headerMessage: 'will you bee my Valentine? 🌹',
    resultHeaderYes: 'You said yes! 😍',
    resultHeaderNo: 'You said no 😢',
    yesImgLink: 'https://media.giphy.com/media/b5LTssxCLpvVe/giphy.gif',
    noImgLink: 'https://media.giphy.com/media/wIhfELB4LvDhe/giphy.gif',
    lastAnswerHeading: 'Last answered:',
};
