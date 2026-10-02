const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const publicDir = path.join(__dirname, "public");
const viewsDir = path.join(__dirname, "views");

app.use(express.static(publicDir));

const view = (name) => path.join(viewsDir, name);

app.get("/", (req, res) => {
  res.sendFile(view("index.html"));
});

app.get("/owners", (req, res) => {
  res.sendFile(view("owners.html"));
});

app.get("/owners/new", (req, res) => {
  res.sendFile(view("owner-new.html"));
});

app.get("/owners/:id", (req, res) => {
  res.sendFile(view("owner.html"));
});

app.get("/animals", (req, res) => {
  res.sendFile(view("animals.html"));
});

app.get("/animals/new", (req, res) => {
  res.sendFile(view("animal-new.html"));
});

app.get("/animals/:id", (req, res) => {
  res.sendFile(view("animal.html"));
});

app.listen(PORT, () => {
  console.log(`Veterinary clinic app listening on http://localhost:${PORT}`);
});
