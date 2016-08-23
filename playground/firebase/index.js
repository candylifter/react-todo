import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB_SlsWrC3jAtQkvANz7EEILymiQn0eKVk",
  authDomain: "todoapp-95a13.firebaseapp.com",
  databaseURL: "https://todoapp-95a13.firebaseio.com",
  storageBucket: "todoapp-95a13.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Martynas',
    age: 21
  }
}).then(() => {
  console.log('Set worked!');
}, (err) => {
  console.log('Set failed!');
});





// firebaseRef.set({
//   appName: 'Todo Application'
// });

firebaseRef.child('user').set({
  name: 'Mike'
});

firebaseRef.child('app').set({
  name: 'Todo App'
});
