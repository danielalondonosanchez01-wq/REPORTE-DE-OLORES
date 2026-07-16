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
  apiKey: "PEGA_AQUI_TU_apiKey",
  authDomain: "PEGA_AQUI_TU_authDomain",
  projectId: "PEGA_AQUI_TU_projectId",
  storageBucket: "PEGA_AQUI_TU_storageBucket",
  messagingSenderId: "PEGA_AQUI_TU_messagingSenderId",
  appId: "PEGA_AQUI_TU_appId"
};
