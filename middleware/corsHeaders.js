const corsHeaders = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "Howaida Express Server");
  next();
};

export default corsHeaders;
