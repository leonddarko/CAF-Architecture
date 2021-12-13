const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/construction", (req, res) => {
    res.render("construction");
});

app.get("/ceiling", (req, res) => {
    res.render("ceiling");
});

app.get("/flooring", (req, res) => {
    res.render("flooring");
});

app.get("/wall-decor", (req, res) => {
    res.render("wall-decor");
});




app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`);
});