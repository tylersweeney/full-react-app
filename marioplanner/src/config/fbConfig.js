  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdiAoCBohitrcIwLzkGdQlBFELHRyGIiw",
    authDomain: "marioplan-9ca05.firebaseapp.com",
    databaseURL: "https://marioplan-9ca05.firebaseio.com",
    projectId: "marioplan-9ca05",
    storageBucket: "marioplan-9ca05.appspot.com",
    messagingSenderId: "1083563287014"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;