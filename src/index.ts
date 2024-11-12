import express, { Request, Response } from "express";
// import express from "express";
import bookRoutes from "./routes/bookRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API! Find your data at /api/<dataType>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});