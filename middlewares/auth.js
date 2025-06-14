import { getUser } from '../service/auth.js'


async function restrictToLoggedinUserOnly(req,res,next){
const userUid = req.cookies ? req.cookies.uid : undefined;
if(!userUid) return res.redirect('/login');

const user = getUser(userUid);
if(!user) return res.redirect('/login');

req.user = user;
next();
} 

async function checkAuth(req,res,next){
    const userUid = req.cookies ? req.cookies.uid : undefined;
    const user = getUser(userUid);
    req.user = user;
    next();
}
export { restrictToLoggedinUserOnly, checkAuth }  