import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQMR_6kwbZBTbcRHYT4_wPyTW_hq-d5x4",
    authDomain: "recette-app-baa52.firebaseapp.com",
    databaseURL: "https://recette-app-baa52.firebaseio.com",
    
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
