import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCCLkfHDtXuNsnAliCMGrYaYEUK1ndOnyk",
    authDomain: "gilberto-silva.firebaseapp.com",
    projectId: "gilberto-silva",
    storageBucket: "gilberto-silva.appspot.com",
    messagingSenderId: "768724781289",
    appId: "1:768724781289:web:962cbf564d845d5ec20878",
    measurementId: "G-MRB48F8M87"
}

export const firebase = initializeApp(firebaseConfig)
export const analytics = getAnalytics(firebase)