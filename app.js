import express from "express";
import corsHeaders from "./middleware/corsHeaders.js";
import videoRoutes from "./routes/videos.js";
/*
express() is a function provided by the Express library.
When you call it, it returns an object — the main Express application object.
This object (app) is used to:
  - Define routes (e.g., app.get(), app.post())
  - Apply middleware (e.g., app.use())
  - Start the server (e.g., app.listen())
*/
const app = express();

/*
is a middleware in Express that tells your app to automatically 
parse incoming requests with JSON payloads and make the data available in req.body.
*/
app.use(express.json());
app.use(corsHeaders); // use the corsHeaders middleware for every incoming request.

app.get("/", (req, res) => res.status(200).send("hello world"));

// all video routes
app.use("/", videoRoutes);

export default app;
