import express from "express";
import userRouter from "./src/router/userRouter.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/api/v1/users", userRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
