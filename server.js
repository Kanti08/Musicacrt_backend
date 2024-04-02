require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require("cors");
// const taskRoutes = require("./routes/task");
// const productRoutes = require("./routes/product");
// const postRoutes = require("./routes/post");
const productsRoutes = require('./routes/products');

const cartRoutes = require('./routes/cartRoute');
const order = require('./routes/order')

app.use(cors());


 app.use(express.json());
//  app.use(express.urlencoded({extended:true}))
mongoose
.connect(process.env.MONGODB_URI)
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("Db Connetcted!"))
.catch((error) => console.log("Failed to connected",error));
app.use('/api/products', productsRoutes);
app.use("/api/v1/auth", authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order',order);
 
// app.use("/api/v1/post",postRoutes)
  // app.use('/add', cartRoutes);
const port = process.env.port || 8001;
app.listen(port, () => {
    console.log(`listening of port ${port}`);
});
