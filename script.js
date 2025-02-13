// 🔥 Firebase Configuration (Replace with your own Firebase details)
const firebaseConfig = {
    apiKey: "AIzaSyCO9FKLkT1N2-izYhqdE0bLcuafAFQm9-c",
    authDomain: "salute-866cd.firebaseapp.com",
    databaseURL: "https://salute-866cd-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "salute-866cd.firebasestorage.app",
    messagingSenderId: "230808060097",
    appId: "1:230808060097:web:a6f3e757fb2a0e8343d440"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get reference to Firebase Realtime Database
const db = firebase.database().ref("salutes");

// Function to update salute count
function updateSaluteCount(count, people) {
    document.getElementById('salute-count').innerText = `Total Salutes: ${count}`;
    document.getElementById('people-count').innerText = `Total People Who Saluted: ${people}`;
}

// Fetch initial salute count from Firebase
db.once("value", snapshot => {
    const data = snapshot.val();
    if (data) {
        updateSaluteCount(data.count, data.people);
    }
});

// Function to handle "Salute" button click
function saluteSoldiers() {
    db.once("value", snapshot => {
        let data = snapshot.val() || { count: 0, people: 0 };
        data.count += 1;
        data.people += 1;  // Assuming 1 salute per person

        // Update Firebase with new count
        db.set(data);
    });
}

// Listen for real-time updates from Firebase
db.on("value", snapshot => {
    const data = snapshot.val();
    if (data) {
        updateSaluteCount(data.count, data.people);
    }
});

// Quotes Feature
const quotes = [
    "The blood of the martyrs is the seed of freedom. 🇮🇳",
    "A soldier dies not when he is shot, but when he is forgotten.",
    "We owe our soldiers more than we can ever repay.",
    "They gave their today for our tomorrow. We salute them!"
];

let currentQuoteIndex = 0;
function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    document.getElementById('quote').innerText = quotes[currentQuoteIndex];
}
