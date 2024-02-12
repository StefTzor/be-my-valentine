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
    valentinesFirstName: 'Evdokia "Vicky"',
    valentinesLastName: 'Vasila',
    headerMessage: 'Will you bee my Valentine date? 🌹',
    resultHeaderYes: 'You said yes! 😍',
    resultHeaderNo: 'You said no 😢',
    yesImgLink: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWt5OG04c3FtZWM2Y21qZ3MxODgyajJlZGtmNWQ4YWNnZ2JveWV4dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S5h4gvxxc1qlG/giphy.gif',
    noImgLink: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2lnNHM1OWF2azNuNDVueHpoZmNzdGFzZnhyajFrZ3VzNGlkazBnMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GRk3GLfzduq1NtfGt5/giphy.gif',
    lastAnswerHeading: 'Last answered:',
};
