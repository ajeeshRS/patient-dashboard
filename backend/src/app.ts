import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import healthRoute from "./routes/healthRoute";
import dashboardRoute from "./routes/dashboardRoutes";

const app = express();
const port = 5001;


app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/", healthRoute);
app.use("/api", dashboardRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
