// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCPLpUDqvU96ycBO6VPAeULWsL45pe2l1g",
    authDomain: "brototype-2f9e5.firebaseapp.com",
    projectId: "brototype-2f9e5",
    storageBucket: "brototype-2f9e5.firebasestorage.app",
    messagingSenderId: "563538645029",
  appId: "1:563538645029:web:8253e11f8b59d555c6efcc"
};

// Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form
const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const eventType = document.getElementById("eventType").value;
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "bookings"), {
      name,
      phone,
      email,
      eventType,
      date,
      location,
      message,
      createdAt: new Date()
    });

    alert("🎉 Booking Submitted Successfully!");
    form.reset();

  } catch (error) {
    console.error(error);
    alert("❌ Error submitting booking");
  }
});
