import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;

const handleListen = () => {
  console.log(`✅ Listening Port : ${PORT}`);
};

app.listen(PORT, handleListen);
