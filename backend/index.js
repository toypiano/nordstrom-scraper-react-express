// If can't find API request in desktop site, try mobile version with chrome dev tool

const express = require("express");
const app = express();
const request = require("request-promise").defaults({
  // Nordstrom is now using GZIP compression on their API
  // - you have to enable gzip in Nodejs Request to make it work and use a User-Agent.
  gzip: true,
  headers: {
    "User-Agent": "PostmanRuntime/7.21.0",
    "Accept-Encoding": "gzip, deflate",
    Authorization: "apikey 8ea31c48-95c3-4bcf-9db1-d6ada47565f2",
    NordApiVersion: 1
  }
});

app.listen(4000, () => {
  console.log("Sever running on port 4000");
});

app.get("/nordstrom", async (req, res, next) => {
  const top = req.query.top;
  const keyword = encodeURIComponent(req.query.keyword);
  const url = `https://query.ecommerce.api.nordstrom.com/api/queryresults/keywordsearch/?top=${top}&IncludeFacets=false&Keyword=${keyword}`;
  console.log(url);
  const json = await request.get(url);
  res.setHeader("Content-Type", "application/json");
  res.send(json);
});
