// // cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');
const Cart = require("../models/cartModel")

const { requireSignIn } = require('../middlewares/authMiddleware');

// const authMiddleware = require('../middlewares/authMiddleware')
// // Route for adding a product to the cart
router.post('/add', cartController.addToCart);





router.get('/all', async (req, res) => {
    try {
        // Fetch all cart items from the database
        const cartItems = await Cart.find();
        res.json(cartItems); // Send the fetched cart items as a JSON response
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});











module.exports = router;
