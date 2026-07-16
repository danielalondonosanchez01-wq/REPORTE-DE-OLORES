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
// 7. (Solo para notificaciones push) Menú izquierdo → ⚙️ → "Configuración
//    del proyecto" → pestaña "Cloud Messaging" → sección "Web configuration"
//    (más abajo) → "Web Push certificates" → botón "Generate key pair".
//    Copia la clave que aparece y pégala abajo en "vapidKey".
//    Los pasos para activar las notificaciones completas (plan Blaze,
//    desplegar la función) están en LEEME-NOTIFICACIONES.txt.
//
// Guía completa con estos mismos pasos está en el documento del proyecto
// en Claude (sección "Estado de construcción").
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyDTP3i8fXawO4wP6svcdHcdv4iJ8cDFpDE",
  authDomain: "reporte-de-olores.firebaseapp.com",
  projectId: "reporte-de-olores",
  storageBucket: "reporte-de-olores.firebasestorage.app",
  messagingSenderId: "32218096292",
  appId: "1:32218096292:web:9300195520faf3f692fc31",
  vapidKey: "BMn8KRW1loEoY2km8WrmrFW_XejGCx_1vYrR4o7cQwaiESFFVoQ7Yo8_vbjMVKsDkw080D3Gz9SSGw7-haLYEo0"
};
