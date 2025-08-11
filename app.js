require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const ejsLayout = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const authLogin = require("./middleware/auth");

let products = JSON.parse(fs.readFileSync("data/products.json"));
let warung = JSON.parse(fs.readFileSync("data/warung.json"));
let users = JSON.parse(fs.readFileSync("data/users.json"));

app.use(cookieParser());
app.use(express.static("public")); 
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(ejsLayout);
app.set("view engine", "ejs");

// route
app.get("/", (req, res) => {
    res.render("pages/main", {
        layout: 'layouts/home.ejs',
        title: "Warung Lokal - belanja mudah dan dekat",
        css: "/style/style.css",
        script: "/script/script.js",
        warung
    });
    // res.json(products);
});

app.post("/", (req,res) => {
    res.redirect("/login");
});

app.get("/login", (req,res) => {
    res.render("pages/login", {
        layout: 'layouts/accounting.ejs',
        title: "Login Warlok",
        css: "/style/accounting.css",
    });
});

app.post("/login", (req, res) => {
    const user = users.find(data => data.username === req.body.username && data.password === req.body.password);
    if(!user){res.json({success: 0});return;}
    const payload = {
        username: req.body.username,
        password: req.body.password
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.cookie("token", token, {
        httpOnly: true,
        maxAge:60000,
        path:"/"
    });
    console.log("uwalah");
    res.json({success: 1,});
});

app.get("/register", (req, res) => {
    res.render("pages/register", {
        layout: "layouts/accounting.ejs",
        title: "Registrasi",
        css: "/style/accounting.css",
    })
});
app.post("/register", (req, res) => {
    const reg = {
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password
    };
    const usrExist = users.find(u => u.username === reg.username);
    const phoneExist = users.find(u => u.phone === reg.phone);
    if(usrExist || phoneExist){
        res.json({username: !usrExist,phone: !phoneExist});
        console.log(reg);
        return;
    }
    res.json({username: !usrExist,phone: !phoneExist});
});

app.get("/beranda", (req,res) => {
    res.render("pages/beranda", {
        title: "Warlok - belanja kapan aja",
        layout: "layouts/mainPage",
        css: "/style/mainPage.css",
        script: "/script/mainPage.js",
        warung
    });
});


app.listen(80, ()=>{
    console.log("server start");
})