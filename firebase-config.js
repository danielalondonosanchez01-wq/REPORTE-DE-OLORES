// ============================================================
// CONFIGURA AQUÍ TU PROYECTO DE FIREBASE (una sola vez)
// ============================================================
// Este es el ÚNICO archivo que tienes que editar. No toques index.html.
//
// 1. Ve a https://console.firebase.google.com, entra con cualquier cuenta
//    de Google y crea un proyecto nuevo (gratis, no pide tarjeta).
// 2. Dentro del proyecto: ⚙️ (junto a "Descripción general del proyecto")
//    → "Configuración del proyecto" → pestaña "General" → sección
//    "Tus apps" → ícono "</>" (Web) → regístrala con el nombre que quieras
//    (ej: "Reporte Olores"). NO marques "Firebase Hosting".
// 3. Firebase te muestra un bloque de código con "const firebaseConfig = {...}".
//    Copia esos valores y reemplaza cada "PEGA_AQUI..." de abajo.
// 4. Menú izquierdo → Compilación → Firestore Database → "Crear base de
//    datos" → modo producción → elige una región cercana (ej. us-central).
// 5. Menú izquierdo → Compilación → Authentication → "Comenzar" →
//    pestaña "Sign-in method" → habilita el proveedor "Anonymous".
// 6. En Firestore Database → pestaña "Reglas": borra lo que hay y pega el
//    contenido del archivo "firestore-reglas.txt" que viene junto a este.
//    Publica los cambios.
//
// Guía completa con estos mismos pasos está en el documento del proyecto
// en Claude (sección "Estado de construcción").
// ============================================================

export const firebaseConfig = {
  apiKey: "// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTP3i8fXawO4wP6svcdHcdv4iJ8cDFpDE",
  authDomain: "reporte-de-olores.firebaseapp.com",
  projectId: "reporte-de-olores",
  storageBucket: "reporte-de-olores.firebasestorage.app",
  messagingSenderId: "32218096292",
  appId: "1:32218096292:web:9300195520faf3f692fc31",
  measurementId: "G-YZFBP781R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);",
  authDomain: "// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTP3i8fXawO4wP6svcdHcdv4iJ8cDFpDE",
  authDomain: "reporte-de-olores.firebaseapp.com",
  projectId: "reporte-de-olores",
  storageBucket: "reporte-de-olores.firebasestorage.app",
  messagingSenderId: "32218096292",
  appId: "1:32218096292:web:9300195520faf3f692fc31",
  measurementId: "G-YZFBP781R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);",
  projectId: "// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTP3i8fXawO4wP6svcdHcdv4iJ8cDFpDE",
  authDomain: "reporte-de-olores.firebaseapp.com",
  projectId: "reporte-de-olores",
  storageBucket: "reporte-de-olores.firebasestorage.app",
  messagingSenderId: "32218096292",
  appId: "1:32218096292:web:9300195520faf3f692fc31",
  measurementId: "G-YZFBP781R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);",
  storageBucket: "// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTP3i8fXawO4wP6svcdHcdv4iJ8cDFpDE",
  authDomain: "reporte-de-olores.firebaseapp.com",
  projectId: "reporte-de-olores",
  storageBucket: "reporte-de-olores.firebasestorage.app",
  messagingSenderId: "32218096292",
  appId: "1:32218096292:web:9300195520faf3f692fc31",
  measurementId: "G-YZFBP781R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);",
  messagingSenderId: "// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTP3i8fXawO4wP6svcdHcdv4iJ8cDFpDE",
  authDomain: "reporte-de-olores.firebaseapp.com",
  projectId: "reporte-de-olores",
  storageBucket: "reporte-de-olores.firebasestorage.app",
  messagingSenderId: "32218096292",
  appId: "1:32218096292:web:9300195520faf3f692fc31",
  measurementId: "G-YZFBP781R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);",
  appId: "PEGA_AQUI_TU_appId"
};
