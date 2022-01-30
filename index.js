const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const req = require("express/lib/request");
const { normalize } = require("path");


const app = express();
const  port = 4000;

app.use(bodyParser.urlencoded({extended:false}))

app.get("/api/v1/userdata", (req,res) =>{
    // console.log(path.join(__dirname + "/test.html"))
    // res.sendFile(path.join(__dirname + "/test.html"))
    res.json({
        name:"Ashu",
        email: "akkrantio@gmail.com",
        contact: "654564464",
    });
});

app.post("/api/v1/register",()=>{
    const userName=req.body.name;
    const userEmail= req.body.email;
    const userContact= req.body.contact-no;
    res.json({
        success:true,
    })
})


// app.post("/api/v1/submit", (req,res) =>{
//     res.send(`<h1>DONE Mr.${req.body.name}</h1> <h2> Your email is ${req.body.email} </h2> <h3>your contact-no is ${req.body.contact-no}</h3>` );
//     console.log(req.body);
// });

app.listen (port, () =>{
    console.log(`Server is working on : ${port}`)
});
