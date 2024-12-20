// server.js
const express = require("express");
const axios = require("axios");
require("dotenv").config(); // load .env
const cors = require("cors");
const {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove
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
// =====================================  USER PROFILE =====================================

app.post("/api/profile", async (req, res) => {
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
        ordersRef: [],
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
app.post("/api/role", async (req, res) => {
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

// Push OrderRefs to user profile
app.post("/api/profile/:orderRef", async (req, res) => {
  const { orderRef } = req.params;
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).send({ message: "No user ID provided" });
  }

  try {
    const userDocRef = doc(firestore, "Profiles", uid);

    await updateDoc(userDocRef, {
      ordersRef: arrayUnion(orderRef), // add orderRef to the array
    });

    res.status(200).send({ message: "Order reference added successfully" });
  } catch (error) {
    console.error("Error adding order reference:", error.message);
    res.status(500).send({ message: "Failed to add order reference" });
  }
});

app.patch("/api/profile", async (req, res) => {
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

// =====================================  STOCK =====================================
// get a stock
app.get("/api/stock/:id", async (req, res) => {
  const { id } = req.params; // Extract item ID from query parameters

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

// get all stock
app.get("/api/stock", async (req, res) => {
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

// update stock
app.post("/api/stock", async (req, res) => {
  const { id, name, quantity } = req.body;

  const stockDocRef = doc(firestore, "Stock", String(id));
  const stockInfo = await getDoc(stockDocRef);

  // if stock exist, update the stock
  if (stockInfo.exists()) {
    await updateDoc(stockDocRef, { id, name, quantity });
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

// =====================================  ORDERS =====================================
// get all orders
app.get("/api/orders", async (req, res) => {
  try {
    const ordersCollection = collection(firestore, "Orders");
    const snapshot = await getDocs(ordersCollection);

    const orders = [];
    snapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).send(orders);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).send({ message: "Failed to fetch orders." });
  }
});


// delete an order
app.delete("/api/orders/:id", async (req, res) => {
  const { id } = req.params;
  const { uid } = req.body;
  if (!id) {
    return res.status(400).send({ message: "Order ID is required." });
  }

  try {
    const orderDocRef = doc(firestore, "Orders", id);
    await deleteDoc(orderDocRef);

    const userDocRef = doc(firestore, "Profiles", uid);
    await updateDoc(userDocRef, {
      ordersRef: arrayRemove(id),
    });

    res.status(200).send({ message: "Order deleted successfully." });
  } catch (error) {
    console.error("Error deleting order:", error.message);
    res.status(500).send({ message: "Failed to delete order." });
  }
});

// create an order
app.post("/api/orders/create", async (req, res) => {
  const { userId, items, address, paymentMethod, totalAmount, date } = req.body;

  if (
    !userId ||
    !items ||
    !address ||
    !paymentMethod ||
    !totalAmount ||
    !date
  ) {
    return res.status(400).send({ message: "All fields are required." });
  }

  try {
    const orderData = {
      userId,
      items,
      address,
      paymentMethod,
      totalAmount,
      date,
    };

    const orderRef = await addDoc(collection(firestore, "Orders"), orderData);
    res
      .status(200)
      .send({ message: "Order created successfully", orderId: orderRef.id });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).send({ message: "Failed to create order" });
  }
});

// get an order
app.post("/api/orders", async (req, res) => {
  const { ordersRef } = req.body;

  if (!ordersRef || !Array.isArray(ordersRef)) {
    return res.status(400).send({
      message: "Orders reference is required and should be an array.",
    });
  }

  try {
    const orders = [];
    for (const orderId of ordersRef) {
      const orderDocRef = doc(firestore, "Orders", orderId);
      const orderSnapshot = await getDoc(orderDocRef);

      if (orderSnapshot.exists()) {
        orders.push({ id: orderId, ...orderSnapshot.data() });
      }
    }

    res.status(200).send(orders);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).send({ message: "Failed to fetch orders." });
  }
});

// ===================================== PRODUCT  REVIEWS =====================================
// get a review
app.get("/api/reviews/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ message: "Product ID is required" });
  }

  try {
    const response = await axios.get(`https://67424979e464749900904321.mockapi.io/reviews/${id}`);
    const product = response.data;

    if (!product || !product.ratings) {
      return res.status(404).send({ message: "No reviews found for this product" });
    }

    const reviews = [
      {
        ratings: product.ratings,
        reviews: product.reviews,
      },
    ];

    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).send({ message: "Failed to fetch reviews" });
  }
});
// =====================================  EMAIL =====================================
// Route to send email confirmation
app.post("/api/email", async (req, res) => {
  const { uid, items } = req.body;

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

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const TAX_RATE = 0.13;
    const shipping = 10;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax + shipping;

    // Generate order table
    const orderTable = `
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Description</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Quantity</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Unit Price</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item) => `
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${
                item.name
              }</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${
                item.quantity
              }</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$${item.price.toFixed(
                2
              )}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$${(
                item.price * item.quantity
              ).toFixed(2)}</td>
            </tr>
          `
            )
            .join("")}
          <tr>
            <td colspan="3" style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">Subtotal</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$${subtotal.toFixed(
              2
            )}</td>
          </tr>
           <tr>
            <td colspan="3" style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">Shipping</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$${shipping.toFixed(
              2
            )}</td>
          </tr>
          <tr>
            <td colspan="3" style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">Tax (${(
              TAX_RATE * 100
            ).toFixed(0)}%)</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$${tax.toFixed(
              2
            )}</td>
          </tr>
          <tr>
            <td colspan="3" style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">Total</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">$${total.toFixed(
              2
            )}</td>
          </tr>
        </tbody>
      </table>
    `;

    // Send email
    await mg.messages
      .create("sandbox9d0b7172306a4e2db87a3e1839c2edec.mailgun.org", {
        from: "Order Confirmation <mailgun@sandbox9d0b7172306a4e2db87a3e1839c2edec.mailgun.org>",
        to: [userData.email],
        subject: "Order Confirmation",
        text: `Hi ${userData.firstName}, please confirm your order.`,
        html: `<h1>Thank You, ${userData.firstName}!</h1>
      <p>We appreciate your order and are excited to serve you!</p>
      <p>Here is your order </p>
      ${orderTable}
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
