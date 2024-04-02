 

const product = require("../models/productModel")
exports.createProduct = async(req,res,next)=>{
    const product = await product.create(req.body);
    res.status(201).json({
        success:true,
        product,
    })
}

exports.getAllProducts = (req,res) =>{
    res.status(200).json({message:"working"});
}
// }
// const product = require("../models/productModel")

// exports.createProduct = async (req, res, next) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(201).json({
//             success: true,
//             product,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to create product",
//             error: error.message,
//         });
//     }
// };