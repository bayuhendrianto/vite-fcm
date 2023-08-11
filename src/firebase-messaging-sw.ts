import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAdCGbdgxinTumKbJCgYrsxo7hXTgPFOeo",
  authDomain: "balen-dev.firebaseapp.com",
  projectId: "balen-dev",
  storageBucket: "balen-dev.appspot.com",
  messagingSenderId: "751055788208",
  appId: "1:751055788208:web:dbd1f91d13ceea43680375",
  measurementId: "G-N36R1SEF7P",
};

const messaging = getMessaging(firebaseConfig);

getToken(messaging, {
  vapidKey:
    "BJZju4nhPxdu62m67Xd40ej9w4uS0KCJM2MUjQsGgqhfOwICrxYwMpSIII1Lj5Xd5SxaORmioyqP2izrOpY8wwM",
})
  .then((currentToken) => {
    console.log(currentToken);
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });
