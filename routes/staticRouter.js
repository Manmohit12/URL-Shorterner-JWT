import express from 'express'
const router = express.Router();
import URL from "../models/url.js"

router.get('/', async (req,res)=>{
    if(!req.user) return res.redirect('/login')
    const allurls=await URL.find({createdBy:req.user._id});
    return res.render("home",{

        urls: allurls,
    });
});

router.get('/signup',(req,res)=>{
    return res.render('signup');
})
router.get('/login',(req,res)=>{
    return res.render('login');
})

export default router