import express from 'express';
import routes from "./routes/routes.js";
import path from "path";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("static"));
app.set("views", path.join(process.cwd(), "views"));
const PORT = process.env.PORT || 25565;

app.use(routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});