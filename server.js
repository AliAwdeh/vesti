const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Import routes
const userRoutes = require("./routes/userRoutes");
const storeRoutes = require("./routes/storeRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const orderItemRoutes = require("./routes/orderItemRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const discountRoutes = require("./routes/discountRoutes");
const storeCategoryRoutes = require("./routes/storeCategoryRoutes");


app.use(bodyParser.json());

// Use routes
app.use("/users", userRoutes);
app.use("/stores", storeRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/order-items", orderItemRoutes);
app.use("/notifications", notificationRoutes);
app.use("/discounts", discountRoutes);
app.use("/store-categories", storeCategoryRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Port 3000 
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
