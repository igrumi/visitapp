export const checkRoleAuth = (roles) => async (req, res, next) => {
    if(roles === req.user.rol){
        next();
    }else{
        res.redirect('back');
    }
    
}
export const checkRoleAuth2 = (roles) => async (req, res, next) => {
    if(roles === req.user.rol){
        next();
    }else{
        res.redirect('back');
    }
    
}