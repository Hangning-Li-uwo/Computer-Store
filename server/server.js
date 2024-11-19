// server.js
const express = require("express");
const cors = require("cors");
const { getFirestore, collection, doc, getDoc,getDocs, setDoc, updateDoc } = require("firebase/firestore");
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
      const newProfile = {
        firstName,
        lastName,
        role: "",
        UID: uid,
        email,
        photoURL,
        address: "",
        paymentMethod: ""
      };

      await setDoc(doc(firestore, "Profiles", uid), newProfile);
      res.status(200).send(newProfile);
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
    await updateDoc(userDocRef, { role: role });

    res.status(200).send({ message: 'Role assigned successfully' });
  } catch (error) {
    console.error('Error updating role:', error);
    res.status(500).send({ message: 'Failed to assign role' });
  }
});

app.get("/api/getStock", async (req, res) => {
  const { id } = req.query; // Extract item ID from query parameters

  if (!id) {
    return res.status(400).send({ message: "Item ID is required" });
  }

  try {
    // Access the Firestore collection and find the item by ID
    const stockDocRef = doc(firestore, "Stock", id);
    const stockDoc = await getDoc(stockDocRef);

    if (stockDoc.exists()) {
      const stockData = stockDoc.data();
      res.status(200).send({ quantity: stockData.quantity }); // Send the quantity of the item
    } else {
      res.status(404).send({ message: "Item not found in stock" });
    }
  } catch (error) {
    console.error("Error retrieving stock:", error);
    res.status(500).send({ message: "Failed to retrieve stock" });
  }
});

app.post("/api/updateStock", async (req, res) => {
  const { pid, pname, quantity } = req.body;

  const stockDocRef = doc(firestore, 'Stock', String(pid));
  const stockInfo = await getDoc(stockDocRef);

  // if stock exist, update the stock
  if (stockInfo.exists()) {
    await updateDoc(stockDocRef, { quantity });
    res.status(200).send({ message: "Stock info retrieved!" });
  }else{
    try {
      // create stock
      await setDoc(doc(firestore, "Stock", String(pid)), {
        pid,
        pname,
        quantity: quantity
      });
      res.status(200).send({ message: "Stock updated" });
  } catch (error) {
    console.error("Error retrieving stock:", error);
    res.status(500).send({ message: "Failed to retrieve stock" });
  }
}
});

app.get('/api/reviews', async (req, res) => {
  try {
    const response = await axios.get('https://serpapi.com/search', {
      params: {
        engine: 'google_product',
        product_id: '21473839577',
        reviews: true,
        api_key: 'df5e954cf47dc057227a92264234498d4f6496e679d69d162e05b148ee7626a9',
      },
    });
    res.status(200).json(response.data.reviews_results);
  } catch (error) {
    // res.status(500).json({ error: error });
    res.status(200).json([
      { rating: 5, title: 'Amazing Product!', snippet: 'Highly recommend it.' },
      { rating: 4, title: 'Great value', snippet: 'Satisfied with the purchase.' },
    ]);
  }
});

app.post("/api/updateUserProfile", async (req, res) => {
  const { uid, address, paymentMethod } = req.body;

  if (!uid && !role) {
    return res.status(400).send({ message: 'no user info' });
  }

  if (!address || !paymentMethod) {
    return res.status(400).send({ message: "Address and payment method are required." });
  }

  try {

    const userDocRef = doc(firestore, "Profiles", uid);

    await updateDoc(userDocRef, {
      address: address,
      paymentMethod: paymentMethod,
    });

    res.status(200).send({ message: "Profile updated successfully!" });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).send({ message: "Failed to update user profile." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

