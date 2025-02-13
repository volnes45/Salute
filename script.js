// 🔥 Firebase Configuration (Replace with your own Firebase details)
const firebaseConfig = {
    apiKey: "AIzaSyCO9FKLkT1N2-izYhqdE0bLcuafAFQm9-c",
    authDomain: "salute-866cd.firebaseapp.com",
    databaseURL: "https://salute-866cd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "salute-866cd",
    storageBucket: "salute-866cd.firebasestorage.app",
    messagingSenderId: "230808060097",
    appId: "1:230808060097:web:a6f3e757fb2a0e8343d440"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get reference to Firebase Realtime Database
const db = firebase.database().ref("salutes");

// Function to update and display salute count
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
        data.people += 1;  // Assuming 1 salute per person for tracking

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

// List of martyrs
const martyrs = [
    "CRPF Constable Sanjay Kumar Sinha",
    "CRPF Constable Ratan Kumar Thakur",
    "CRPF Constable Naseer Ahmed",
    "CRPF Head Constable Naseer Ahmed",
    "CRPF Constable Vijay Soreng",
    "CRPF Constable Kulwinder Singh",
    "CRPF Constable Tilak Raj",
    "CRPF Constable Rohitash Lamba",
    "CRPF Constable Sukhjinder Singh",
    "CRPF Constable Vasantha Kumar",
    "CRPF Constable Jaimal Singh"
];

// Adding martyrs names dynamically
const martyrList = document.getElementById('martyrs');
martyrs.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    martyrList.appendChild(li);
});

// Inspirational Quotes
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

// Function to handle salute button click
function saluteSoldiers() {
    saluteCount++;
    document.getElementById('salute-count').innerText = `Total Salutes: ${saluteCount}`;
    
   
