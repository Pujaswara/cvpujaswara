import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBi-vlhXJQB9D70xPoXDUxYc0oMNfdHIj0",
  authDomain: "comment-7973f.firebaseapp.com",
  projectId: "comment-7973f",
  storageBucket: "comment-7973f.appspot.com",
  messagingSenderId: "259487154301",
  appId: "1:259487154301:web:77e34e2df8bfe798e63114",
  measurementId: "G-6E3CL6W17R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ⬇️ fungsi saveComment sekarang bisa save name, text, rating
async function saveComment(name: string, text: string, rating: number) {
  try {
    const docRef = await addDoc(collection(db, "comments"), {
      name,
      text,
      rating,
      createdAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getAllComments() {
  const querySnapshot = await getDocs(collection(db, "comments"));
  return querySnapshot.docs.map(doc => doc.data());
}

export { db, saveComment, getAllComments };
