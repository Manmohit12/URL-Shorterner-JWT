import jwt from 'jsonwebtoken';
const secret='password1234'

function setUser(user){
   
    return jwt.sign(user,secret)
}

function getUser(token){
    if(!token) return null   
    try {
        return jwt.verify(token,secret)
    } catch (error) {
        // If token is malformed or invalid, return null
        return null
    }
}

export  {setUser,getUser} 