import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBq_6eoAjquJCXE28kT7qO2NvVzNE9rLCI",
  authDomain: "aiva-shop-6a65e.firebaseapp.com",
  projectId: "aiva-shop-6a65e",
  storageBucket: "aiva-shop-6a65e.appspot.com",
  messagingSenderId: "477222047386",
  appId: "1:477222047386:web:4eab7d1fb261c9e112d923"
};
const app = initializeApp(firebaseConfig);

export const firestoreInit = () =>{
    return app
}