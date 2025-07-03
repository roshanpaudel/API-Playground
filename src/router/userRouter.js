import express from "express";

const router = express.Router();


let fakeDB = [
  { id: "1", fName: "Roshan", lName: "Paudel" },
  { id: "2", fName: "Santoshi", lName: "Lc" },
];

router.get("/", (req, res) => {
  res.json({
    message: "get method",
    name: fakeDB,
  });
});
router.post("/", (req, res) => {
  console.log(req.body);
  fakeDB.push(req.body);
  res.json({
    message: "post method",
  });
});
router.put("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "put method",
  });
});
router.delete("/:id", (req, res) => {
  console.log(req.params, "from delete");
  res.json({
    message: "delete method",
  });
});
export default router;
