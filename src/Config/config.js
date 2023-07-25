import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBpn3QJH0zo07zhxPheGEwk9DbJvb9CMAc",
    authDomain: "vue-vuex-auth-11386.firebaseapp.com",
    projectId: "vue-vuex-auth-11386",
    storageBucket: "vue-vuex-auth-11386.appspot.com",
    messagingSenderId: "35229601577",
    appId: "1:35229601577:web:b70b80c68e075544a7b138"
  };

  //init firebase
  initializeApp(firebaseConfig)

  //init firebase auth
  const auth = getAuth()

  export {auth}