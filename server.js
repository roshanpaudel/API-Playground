import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "get method",
  });
});
app.post("/", (req, res) => {
  res.json({
    message: "post method",
  });
});
app.put("/", (req, res) => {
  res.json({
    message: "put method",
  });
});
app.delete("/", (req, res) => {
  res.json({
    message: "delete method",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
