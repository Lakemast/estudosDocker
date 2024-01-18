const express = require("express");
const app = express();
const port = 8089;

app.use(express.static("public"));

/* app.get("/", (request, response) => {
  response.send("Hello World");
}); */

app.listen(port, () => {
  console.log(`Executando na porta ${port}`);
});
