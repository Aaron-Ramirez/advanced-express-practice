import express from "express";
// import comments from "./comments";
// import products from "./products";
// import vehicles from "./vehicles";
// import contacts from "./contacts";
import bodyParser from "body-parser";
import commentRoutes from "./routes/CommentRoutes";
import contactRoutes from "./routes/ContactRoutes";
import productRoutes from "./routes/ProductRoutes";
import vehicleRoutes from "./routes/VehicleRoutes";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/express-practice");

const app = express();

app.use(bodyParser.json());
app.use(commentRoutes);
app.use(contactRoutes);
app.use(productRoutes);
app.use(vehicleRoutes);

const port = process.env.PORT || 3001;



app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
