const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
   

    productId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1 // Assuming default quantity is 1
    }
});

module.exports = mongoose.model("CartItem", cartItemSchema);
