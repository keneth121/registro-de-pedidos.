// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  update,
  remove
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBwgArgFT_R6XBGewGysB-94KastoT0-9c",
  authDomain: "proyecto-de-ventas-3df14.firebaseapp.com",
  databaseURL: "https://proyecto-de-ventas-3df14-default-rtdb.firebaseio.com",
  projectId: "proyecto-de-ventas-3df14",
  storageBucket: "proyecto-de-ventas-3df14.appspot.com",
  messagingSenderId: "43399982147",
  appId: "1:43399982147:web:59b9fb54260b659cc8b8f6"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue, update, remove };
