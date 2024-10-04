let reservation =
{
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
}

function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    if( document.querySelector(`.${className}`) != null){
    document.querySelector(`.${className}`).classList.remove('hidden');
    }
}

document.querySelector('#new-reservation').addEventListener('click', (e) => cleanData(e));

function cleanData(e) {
    changeContent('search-form-content');
}
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Simulate some pre-defined offers using existing images in the img folder
let offers = [
    { name: "Product 1", price: "10.00", image: "product1.jpg" },
    { name: "Product 2", price: "20.00", image: "product2.jpg" },
    { name: "Product 3", price: "30.00", image: "product3.jpg" },
    { name: "Product 4", price: "40.00", image: "product4.jpg" },
    { name: "Product 5", price: "50.00", image: "product5.jpg" },
    { name: "Product 6", price: "60.00", image: "product6.jpg" },
    { name: "Product 7", price: "70.00", image: "product7.jpg" },
    { name: "Product 8", price: "80.00", image: "product8.jpg" },
    { name: "Product 9", price: "90.00", image: "product9.jpg" }
];

// Middleware to serve static files from 'img' and 'css' folders
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Pagination route to serve offers
app.get('/offers', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const offersPerPage = 3;
    const startIndex = (page - 1) * offersPerPage;
    const endIndex = startIndex + offersPerPage;

    const paginatedOffers = offers.slice(startIndex, endIndex);

    res.json({
        offers: paginatedOffers,
        hasPrev: page > 1,
        hasNext: endIndex < offers.length
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

