import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1ZGNAxL_bIsMDW0wteRbDxt4V695-EXI",
  authDomain: "progressivepulse-c437d.firebaseapp.com",
  projectId: "progressivepulse-c437d",
  storageBucket: "progressivepulse-c437d.appspot.com",
  messagingSenderId: "618453197430",
  appId: "1:618453197430:web:4064a64f10daa5ccb83557",
  measurementId: "G-QF4384XJWP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
