// cartController.js
const Cart = require('../models/cartModel');

// Controller function to add a product to the cart
exports.addToCart = async (req, res) => {
    try {
        const { name ,company,color, quantity,price ,userName} = req.body;
        const cartItem = await Cart.create({ name,company,color, quantity ,price,userName});
        res.status(200).json({ success: true, message: 'Product added to cart successfully', data: cartItem });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ success: false, message: 'Error adding product to cart' });
    }
};

