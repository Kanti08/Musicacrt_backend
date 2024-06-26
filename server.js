require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const productsRoutes = require('./routes/products');

const cartRoutes = require('./routes/cartRoute');
const order = require('./routes/order')

app.use(cors());


 app.use(express.json());

mongoose
.connect(process.env.MONGODB_URI)

.then(()=> console.log("Db Connetcted!"))
.catch((error) => console.log("Failed to connected",error));
app.use('/api/products', productsRoutes);
app.use("/api/v1/auth", authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order',order);


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Health route
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});
 

const port = process.env.port || 8001;
app.listen(port, () => {
    console.log(`listening of port ${port}`);
});
