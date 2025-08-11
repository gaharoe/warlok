const warung = [
    {
        nama : "Ahmad Rojali",
        desc : "warung madura",
        open : "24 jam",
        galon : "true",
        gas : "true",
        jarak : "800m"
    }, 
    {
        nama : "Alliza",
        desc : "warung",
        open : "",
        galon : "true",
        gas : "",
        jarak : "351m"
    },
    {
        nama : "Madura Jafar",
        desc : "warung madura",
        open : "24 jam",
        galon : "true",
        gas : "true",
        jarak : "400m"
    },
    {
        nama : "Mulya Aji Jaya",
        desc : "warung",
        open : "",
        galon : "true",
        gas : "true",
        jarak : "200m"
    },
    {
        nama : "Pangestu",
        desc : "warung",
        open : "",
        galon : "",
        gas : "",
        jarak : "450m"
    },

];
let i = 0;
const fs = require("fs");
const files = fs.readdirSync("public/assets/img_warung/");
warung.forEach(item => {
    item.img = "/assets/img_warung/"+files[i++];
});
fs.writeFileSync("data/warung.json", JSON.stringify(warung));