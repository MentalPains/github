import express from "express";
import cors from "cors";
import records from "./routes/record.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

app.get("/", async (req, res) => {
  res.send("Hello World").status(200);
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
