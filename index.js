import express from "express";
import { products } from "./ProductData.js";
import cors from "cors"
const app = express();
const port = process.env.PORT || 3000;


app.use(cors())

app.get("/", (req, response) => {
//   console.log(response.send(`hello world ${req.params.id}`));

  response.send("hello World");
//   console.log("hello")
 
});

app.get("/product", (req, response) => {
  //   console.log(response.send(`hello world ${req.params.id}`));
  
    response.send(products);
   
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});