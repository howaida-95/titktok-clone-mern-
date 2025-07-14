import app from "./app.js";
import connectDB from "./config/db.js";

/*
app.js = configure the app
server.js = run the app
*/
const port = 9000;

connectDB();
/*
  app is the Express server, already configured with:
  JSON parsing (express.json())
  CORS headers (app.use(corsHeaders))
  Routes (app.use("/...", routes))
  You import it into server.js to attach it to a port with:
*/
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));