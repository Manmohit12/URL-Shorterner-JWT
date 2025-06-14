import User from '../models/user.js';
import { v4 as uuidv4 } from 'uuid';
import {setUser} from '../service/auth.js'

async function handleUserSignup(req, res) {
    try {
        const { name, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Handle duplicate email case
            return res.status(400).send('Email already exists. Please use a different one.');
        }

        // Create new user
        await User.create({ name, email, password });

        // Redirect or render home page
        return res.render('home');
    } catch (error) {
        console.error('Signup Error:', error);
        return res.status(500).send('Something went wrong during signup.');
    }
}
async function handleUserLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user =await User.findOne({email,password})
        if(!user){
            return res.render("login",{
                error:'Invalid username and password'
            });
        }
        const sessionId = uuidv4(); 
        setUser(sessionId,user);
        //uid iska naam ha
        res.cookie("uid",sessionId)
        return res.redirect("/")
    } catch (error) {
        console.error('Signup Error:', error);
        return res.status(500).send('Something went wrong during signup.');
    }
}

export { handleUserSignup, handleUserLogin };
