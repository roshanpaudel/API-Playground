import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (res, req) => {
  res.json({
    message: "get method",
  });
});
app.post("/", (res, req) => {
  res.json({
    message: "post method",
  });
});
app.put("/", (res, req) => {
  res.json({
    message: "put method",
  });
});
app.delete("/", (res, req) => {
  res.json({
    message: "delete method",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server runnig at http://localhost:${PORT}`);
});
