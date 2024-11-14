// server.js
const express = require("express");
const cors = require("cors");
const { getFirestore, doc, getDoc, setDoc, updateDoc } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyDyc5gj-7b9YclJGtd1ud9n822WOytoitU",
  authDomain: "sensor-13ce6.firebaseapp.com",
  projectId: "sensor-13ce6",
  storageBucket: "sensor-13ce6.firebasestorage.app",
  messagingSenderId: "1059425604798",
  appId: "1:1059425604798:web:c2d5f9f5c680422dbebaef",
  measurementId: "G-B9YXDTQCTC"
};

// Initialize Firebase
const firestoreApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firestoreApp);

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.removeHeader("Cross-Origin-Opener-Policy");
  res.removeHeader("Cross-Origin-Embedder-Policy");
  next();
});

app.post("/api/setUserProfile", async (req, res) => {
  const { uid, firstName, lastName, email, photoURL } = req.body;

  const userDocRef = doc(firestore, 'Profiles', uid);
  const userInfo = await getDoc(userDocRef);
  console.log("role: ",userInfo.data());
  if (userInfo.exists() && userInfo.data() && (userInfo.data().role === 'user' || userInfo.data().role === 'admin')) {
    res.status(200).send({ message: "Profile retrieved!" });
  } else{
    try {
      // Save user data to Firestore
      await setDoc(doc(firestore, "Profiles", uid), {
        firstName,
        lastName,
        role: "",
        UID: uid,
        email,
        photoURL
      });
      res.status(200).send({ message: "Profile created successfully" });
    } catch (error) {
      console.error("Error creating profile:", error);
      res.status(500).send({ message: "Failed to create profile" });
    }
  }
});

// Endpoint to assign role
app.post('/api/assignRole', async (req, res) => {
  const { uid, role } = req.body;
  if (!uid && !role) {
    return res.status(400).send({ message: 'no user info' });
  }

  try {
    // Update user's role in Firestore
    const userDocRef = doc(firestore, 'Profiles', uid);
    await updateDoc(userDocRef, { role });

    res.status(200).send({ message: 'Role assigned successfully' });
  } catch (error) {
    console.error('Error updating role:', error);
    res.status(500).send({ message: 'Failed to assign role' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
