import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-KIgUuh2VqcAn2CjuZvojZbGi5QC2_jY",
  authDomain: "sadhin-mart.firebaseapp.com",
  projectId: "sadhin-mart",
  storageBucket: "sadhin-mart.appspot.com",
  messagingSenderId: "863775334547",
  appId: "1:863775334547:web:381d3d03dcfabcd0cf2d66",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
