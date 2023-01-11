const express = require('express');
const Router = express.Router();
const homeSchema = require('../models/homeSchema')


Router.get('/',(err,res)=>{
    res.render('index')
})
Router.get("/sunglasses",(req,res)=>{
    res.render('sunglasses')
});
Router.get("/eyeglasses",(req,res)=>{
    res.render('eyeglasses')
});
Router.get("/kidsglasses",(req,res)=>{
    res.render('kidsglasses')
});
Router.get("/computerglasses",(req,res)=>{
    res.render('computerglasses')
});
Router.get("/contactlenses",(req,res)=>{
    res.render('contactlenses')
});

Router.get('/signin',(err,res)=>{
    res.render('signin')
})
Router.get('/signup', (err,res)=>{
    res.render('signup')
})
Router.post('/signup',async(req,res)=>{
    try{
        const {
            first_name,
            last_name,
            mobile_number,
            email,
            password,
            cpassword,
        } = req.body;

 
        if(password === cpassword ){
            const userData = new homeSchema({
                first_name,
                last_name,
                mobile_number,
                email,
                password,
                cpassword
            })


            userData.save(err=>{
                if(err){
                    console.log(err)
                }else{
                    res.render('signup')

                }
            })

            const useremail = await homeSchema.findOne({email:email});
            if(email === useremail.email){
                res.render('signup')
            }else{
                console.log('err')
            }
        }else{
            res.render('signup')
        }

    }catch(error){
        res.render('signup')
    }
});


//login 

Router.post('/signin',async (req,res)=>{
    const{
        email,
        password
    } = req.body;

   const user = await homeSchema.findOne({email:email, password:password})

   if(!user){
    console.log('Incorrect email or password!')
   }else{
    res.render('dashbord', {name : user.first_name +" "+ user.last_name})
   }
     
})
module.exports = Router;