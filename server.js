import express from "express";

const app = express();
const PORT = 8000;

let fakeDB = [
  { id: "1", fName: "Roshan", lName: "Paudel" },
  { id: "2", fName: "Santoshi", lName: "Lc" },
];
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "get method",
    name: fakeDB,
  });
});
app.post("/", (req, res) => {
  console.log(req.body);
  fakeDB.push(req.body);
  res.json({
    message: "post method",
  });
});
app.put("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "put method",
  });
});
app.delete("/:id", (req, res) => {
  console.log(req.params, "from delete");
  res.json({
    message: "delete method",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
