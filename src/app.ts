import express from "express";
import * as dotenv from "dotenv";
import { userRoutes } from "./routes/userRoute";
import { bookReoutes } from "./routes/bookRoute";
import { authorRoutes } from "./routes/authorRoute";
import { reviewReoutes } from "./routes/reviewRoute";
import { ratingReoutes } from "./routes/ratingRoute";
import { merchantRoutes } from "./routes/merchantRoute";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", bookReoutes);
app.use("/api", authorRoutes);
app.use("/api", reviewReoutes);
app.use("/api", ratingReoutes);
app.use("/api", merchantRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;



