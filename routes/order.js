

// routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/place', async (req, res) => {
    // try {
    //     const { name, address, totalPrice, deliveryDate} = req.body;

    //     // Check if the name field is present
    //     if (!name || !address || !totalPrice||!deliveryDate) {
    //         return res.status(400).json({ message: 'Name field is required' });
    //     }

    //     // Create a new order with the provided fields
    //     const newOrder = new Order({ name, address, totalPrice, deliveryDate});
    //     await newOrder.save();

    //     res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    // } catch (error) {
    //     console.error('Error placing order:', error);
    //     res.status(500).json({ message: 'Internal server error' });
    // }
     try {
        const { name, address, paymentMethod} = req.body;

        // Check if all required fields are present
        if (!name || !address || !paymentMethod  ) {
            return res.status(400).json({ message: 'Invalid request data' });
        }

        // Create a new order with the provided fields
        const newOrder = new Order({ name, address, paymentMethod });
        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;



