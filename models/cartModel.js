// cartModel.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
   
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    company: {
        type: String,
        require: true,
        trim: true,
    },
   color: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    //  userId: {
    //     type: mongoose.Types.ObjectId,
    //     required: true,
    // },

     userName: {
       type:String,
        required: true
         // Make username required
    },
});
 

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
