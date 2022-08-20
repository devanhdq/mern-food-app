import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyA6rZNe0C6xbN66TSfBwXxc_SMCTpOGpwA",
    authDomain: "mern-app-food.firebaseapp.com",
    databaseURL: "https://mern-app-food-default-rtdb.firebaseio.com",
    projectId: "mern-app-food",
    storageBucket: "mern-app-food.appspot.com",
    messagingSenderId: "319918016997",
    appId: "1:319918016997:web:6b7118511b2e166a95470c"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};
