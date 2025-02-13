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

// Load salute count from localStorage (if available)
let saluteCount = localStorage.getItem('saluteCount') ? parseInt(localStorage.getItem('saluteCount')) : 0;
document.getElementById('salute-count').innerText = `Total Salutes: ${saluteCount}`;

// Function to handle salute button click
function saluteSoldiers() {
    saluteCount++;
    document.getElementById('salute-count').innerText = `Total Salutes: ${saluteCount}`;
    
    // Save updated count to localStorage
    localStorage.setItem('saluteCount', saluteCount);
}
