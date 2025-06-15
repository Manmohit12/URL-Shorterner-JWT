import { getUser } from '../service/auth.js';

async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies ? req.cookies.uid : undefined;
    if (!userUid) return res.redirect('/login');

    const user = getUser(userUid);  // OK if getUser is sync
    if (!user) return res.redirect('/login');

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const userUid = req.cookies ? req.cookies.uid : undefined;
    const user = getUser(userUid);  // OK if getUser is sync
    req.user = user;
    next();
}

export { restrictToLoggedinUserOnly, checkAuth };
