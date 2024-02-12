/*
 * Created Date: Friday, 5th February 2021, 1:06:30 am
 * Author: Kingsley Chimezie
 */


/* FIREBASE CONFIG
-------------------------------- */
const firebaseConfig = {
    apiKey: "AIzaSyAcyXNnkIx3yzeSePUWeOdFdxqfJ5sqBC8",
    authDomain: "be-my-valentine-b0865.firebaseapp.com",
    projectId: "be-my-valentine-b0865",
    storageBucket: "be-my-valentine-b0865.appspot.com",
    messagingSenderId: "66246510885",
    appId: "1:66246510885:web:cb39a4db366b508917f2cc",
    measurementId: "G-G9MN6VW1FT"
  };

/* CLOUD FIRESTORE CONFIG
-------------------------------- */
const firestore = {
    collectionName: 'valentines',
    docID: 'VJdFjvRIkGAgPJd7F2xf'
};


/* UI DATA
-------------------------------- */
const uiData = {
    valentinesFirstName: 'Vicky',
    valentinesLastName: 'Vasila',
    headerMessage: 'Will you bee my Valentine? 🌹',
    resultHeaderYes: 'You said yes! 😍',
    resultHeaderNo: 'You said no 😢',
    yesImgLink: 'https://media.giphy.com/media/b5LTssxCLpvVe/giphy.gif',
    noImgLink: 'https://media.giphy.com/media/wIhfELB4LvDhe/giphy.gif',
    lastAnswerHeading: 'Last answered:',
};
