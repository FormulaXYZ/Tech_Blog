const withAuth = (req, res, next) => {
   
    if(!req.session.userID){
      return res.redirect("/login");
    }else{
    
    next();
}
  };
  
  module.exports = withAuth;