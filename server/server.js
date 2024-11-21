// server.js
const express = require("express");
require('dotenv').config(); // Load .env variables
const cors = require("cors");
const {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} = require("firebase/firestore");
const { initializeApp } = require("firebase/app");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const firebaseConfig = {
  apiKey: "AIzaSyDyc5gj-7b9YclJGtd1ud9n822WOytoitU",
  authDomain: "sensor-13ce6.firebaseapp.com",
  projectId: "sensor-13ce6",
  storageBucket: "sensor-13ce6.firebasestorage.app",
  messagingSenderId: "1059425604798",
  appId: "1:1059425604798:web:c2d5f9f5c680422dbebaef",
  measurementId: "G-B9YXDTQCTC",
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

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAiLGUN_API_KEY,
});

// Route to send email confirmation
app.post("/api/sendConfirmationEmail", async (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).send({ message: "User ID is required" });
  }

  try {
    // Fetch user data from Firestore
    const userDocRef = doc(firestore, "Profiles", uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      return res.status(404).send({ message: "User not found" });
    }

    const userData = userDoc.data();
    // Send email
    await mg.messages
      .create("sandbox7393dc96ed224d0d8810ad9e74fa977f.mailgun.org", {
        from: "Order Confirmation <mailgun@sandbox7393dc96ed224d0d8810ad9e74fa977f.mailgun.org>",
        to: [userData.email],
        subject: "Order Confirmation",
        text: `Hi ${userData.firstName}, please confirm your order.`,
        html: `<h1>Thank You, ${userData.firstName}!</h1>
      <p>We appreciate your order and are excited to serve you!</p>
      <p>Please confirm your order by clicking the link below:</p>
      <p><a href="http://localhost:3000.com/confirm-email?uid=${uid}" style="color: blue; text-decoration: underline;">Confirm Your Order</a></p>
      <p>If you have any questions, feel free to reach out to our support team.</p>
      <p>Best regards,<br>The Team</p>`,
      })
      .then((msg) => console.log(msg))
      .catch((err) => console.log(err));

    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Failed to send email" });
  }
});

app.post("/api/setUserProfile", async (req, res) => {
  const { uid, firstName, lastName, email, photoURL } = req.body;

  const userDocRef = doc(firestore, "Profiles", uid);
  const userInfo = await getDoc(userDocRef);
  if (
    userInfo.exists() &&
    userInfo.data() &&
    (userInfo.data().role === "user" || userInfo.data().role === "admin")
  ) {
    res.status(200).send(userInfo.data());
  } else {
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
        paymentMethod: "",
      };

      await setDoc(doc(firestore, "Profiles", uid), newProfile);
      res.status(200).send(newProfile);
    } catch (error) {
      console.error("Error creating profile:", error);
      res.status(500).send({ message: "Failed to create profile" });
    }
  }
});

// Endpoint to assign roles
app.post("/api/assignRole", async (req, res) => {
  const { uid, role } = req.body;
  if (!uid && !role) {
    return res.status(400).send({ message: "no user info" });
  }

  try {
    // Update user's role in Firestore
    const userDocRef = doc(firestore, "Profiles", uid);
    await updateDoc(userDocRef, { role: role });

    res.status(200).send({ message: "Role assigned successfully" });
  } catch (error) {
    console.error("Error updating role:", error);
    res.status(500).send({ message: "Failed to assign role" });
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

app.get("/api/getAllStock", async (req, res) => {
  try {
    const stockCollectionRef = collection(firestore, "Stock");
    const stockSnapshot = await getDocs(stockCollectionRef);

    if (stockSnapshot.empty) {
      return res.status(404).send({ message: "No stock items found" });
    }

    const stockItems = [];
    stockSnapshot.forEach((doc) => {
      stockItems.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).send(stockItems);
  } catch (error) {
    console.error("Error retrieving all stock:", error);
    res.status(500).send({ message: "Failed to retrieve all stock" });
  }
});

app.post("/api/updateStock", async (req, res) => {
  const { id, name, quantity } = req.body;

  const stockDocRef = doc(firestore, "Stock", String(id));
  const stockInfo = await getDoc(stockDocRef);

  // if stock exist, update the stock
  if (stockInfo.exists()) {
    await updateDoc(stockDocRef, {id, name, quantity });
    res.status(200).send({ message: "Stock info retrieved!" });
  } else {
    try {
      // create stock
      await setDoc(doc(firestore, "Stock", String(id)), {
        id,
        name,
        quantity: quantity,
      });
      res.status(200).send({ message: "Stock updated" });
    } catch (error) {
      console.error("Error retrieving stock:", error);
      res.status(500).send({ message: "Failed to retrieve stock" });
    }
  }
});

app.get("/api/reviews", async (req, res) => {
  try {
    const response = await axios.get("https://serpapi.com/search", {
      params: {
        engine: "google_product",
        product_id: "21473839577",
        reviews: true,
        api_key:
          "df5e954cf47dc057227a92264234498d4f6496e679d69d162e05b148ee7626a9",
      },
    });
    res.status(200).json(response.data.reviews_results);
  } catch (error) {
    // res.status(500).json({ error: error });
    res.status(200).json([
      { rating: 5, title: "Amazing Product!", snippet: "Highly recommend it." },
      {
        rating: 4,
        title: "Great value",
        snippet: "Satisfied with the purchase.",
      },
    ]);
  }
});

app.post("/api/updateUserProfile", async (req, res) => {
  const { uid, address, paymentMethod } = req.body;

  if (!uid && !role) {
    return res.status(400).send({ message: "no user info" });
  }

  if (!address || !paymentMethod) {
    return res
      .status(400)
      .send({ message: "Address and payment method are required." });
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
