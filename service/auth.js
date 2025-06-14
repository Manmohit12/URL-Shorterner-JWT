const sessionIdToUseMap=new Map();

function setUser(id,user){
    sessionIdToUseMap.set(id,user)
}

function getUser(id){
    return sessionIdToUseMap.get(id);
}

export  {setUser,getUser} 