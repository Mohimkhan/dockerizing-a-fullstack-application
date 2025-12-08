import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", UserSchema);

// 2. Connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("DB Connection Error:", err));

app.get("/", (_, res) => {
  res.json({ message: "Server is working fine" });
});

app.get("/users", async (_, res) => {
  try {
    const users = await User.find({});
    res.json({ data: users });
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json({ message: "User created", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
