/*
    # Type: 
      > commonJS    : asli javascript
      > module      : javascript versi es6
    # CORS: by pass komunikasi server to server
*/
import express from "express";
import cors from "cors";
import db from "./config/database.config.js";
import productRouter from "./routes/product.route.js";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// pengujian koneksi ke database
try {
  await db.authenticate(); // koneksi ke database
  console.log(">> Success connect to database");
} catch (error) {
  console.log(">> Error database connection: ", error);
}

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
