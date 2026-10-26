import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getDatabase, ref, push, serverTimestamp } from 'firebase/database';
import { getFirestore, collection, addDoc, serverTimestamp as firestoreTimestamp } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4c-7S2PD2J1Cisy2_cq30Neql4Ka0lJY",
  authDomain: "portfolio-ea3bf.firebaseapp.com",
  databaseURL: "https://portfolio-ea3bf-default-rtdb.firebaseio.com",
  projectId: "portfolio-ea3bf",
  storageBucket: "portfolio-ea3bf.firebasestorage.app",
  messagingSenderId: "636035592909",
  appId: "1:636035592909:web:33273618a8c9026370af84",
  measurementId: "G-7R9YG1XY2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database & Cloud Firestore
const db = getDatabase(app);
const firestore = getFirestore(app);

// Initialize Firebase Analytics safely
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((err) => {
    console.warn('Firebase Analytics not initialized:', err);
  });
}

/**
 * Saves a contact form submission to Firebase.
 * Tries Realtime Database first, and falls back to / also saves to Firestore.
 */
export async function saveContactMessage(data) {
  const payload = {
    name: data.name?.trim() || '',
    email: data.email?.trim() || '',
    subject: data.subject?.trim() || 'General Inquiry',
    message: data.message?.trim() || '',
    submittedAt: new Date().toISOString()
  };

  let saved = false;
  let lastError = null;

  // 1. Try Realtime Database
  try {
    const messagesRef = ref(db, 'messages');
    await push(messagesRef, {
      ...payload,
      timestamp: serverTimestamp()
    });
    saved = true;
  } catch (err) {
    console.warn('Realtime Database write failed:', err);
    lastError = err;
  }

  // 2. Try Cloud Firestore
  try {
    const messagesCol = collection(firestore, 'messages');
    await addDoc(messagesCol, {
      ...payload,
      timestamp: firestoreTimestamp()
    });
    saved = true;
  } catch (err) {
    console.warn('Firestore write failed:', err);
    if (!saved) {
      lastError = err;
    }
  }

  if (!saved) {
    throw lastError || new Error('Failed to save message to Firebase.');
  }

  return { success: true };
}

export { app, db, firestore, analytics };
export default app;
