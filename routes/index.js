var express = require('express');
var router = express.Router();
const userModel = require("../model/regUser")

/* GET home page. */
router.get('/', function(req, res,next) {
  // console.log(req.flash());
  res.render('index', { messages: req.flash() });
});

router.get('/testing', function(req, res,next) {
  // console.log(req.flash());
  res.render('testing');
});

router.post("/testing",(req,res)=>{
  res.send("successfull !");
})

router.post('/', async(req, res, next)=> {
  let {firstname,lastname,age,city,password,conpassword} = req.body;

  if(!firstname || !lastname || !age || !city || !password || !conpassword){
    req.flash("error","All fild Are Requied !")
   
    return res.redirect("/")
  }
  else if(password.length < 8 || conpassword.length < 8 ){

    req.flash("error","password be most 8 carector")
    return res.redirect("/")
  }else if(password !== conpassword){
    req.flash("error","pless password and counform-password same dalo")
    return res.redirect("/")
  }
else{
  let newUser = await userModel.create({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    age:req.body.age,
    city:req.body.city,
    password:req.body.password,
    conpassword:req.body.conpassword,
  })
  req.flash("success","formed submited");
  return res.redirect("/")
}

});


module.exports = router;
