import { getAnalytics, isSupported as analyticsIsSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBF4P62ICvi8NcXTV1hqYr6ktrzr_Pwg4g",
  authDomain: "heritagevault-12a72.firebaseapp.com",
  projectId: "heritagevault-12a72",
  storageBucket: "heritagevault-12a72.firebasestorage.app",
  messagingSenderId: "357035240092",
  appId: "1:357035240092:web:ab95eef42e90105ba15b59",
  measurementId: "G-RVDX527SFW",
} as const;

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);

export const analyticsReady = analyticsIsSupported().then((supported) => {
  if (supported) getAnalytics(firebaseApp);
  return supported;
});
