import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (res, req) => {
  console.log("server get");
  res.json({
    message: "get method",
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server runnig at http://localhost:${PORT}`);
});
