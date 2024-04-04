

// routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/place', async (req, res) => {
   
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

router.get('/fetch', async (req, res) => {
    try {
        // Fetch all orders from the database
        const orders = await Order.find();

        // If there are no orders found
        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found' });
        }

        // Send the orders as response
        res.status(200).json({ message: 'Orders fetched successfully', orders: orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to fetch a specific order by ID
router.get('/fetch/:Id', async (req, res) => {
    try {
        // Extract the orderId from the request parameters
        const { orderId } = req.params;

        // Find the order by its ID in the database
        const order = await Order.findById(orderId);

        // If the order with the specified ID does not exist
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Send the order as response
        res.status(200).json({ message: 'Order fetched successfully', order: order });
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;



