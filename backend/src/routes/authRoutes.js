const express = require("express");
const router = express.router()

router.post("/signup",(req,res)=>{
 res.send("signup route")
})
router.post("/login",(req,res)=>{
 res.send("login route")
})
router.post("/logout",(req,res)=>{
 res.send("logout route")
})
