module.exports = function(req,res,next){
  if (req.fullUser && req.fullUser.admin) return next();

  next(new Error('Ypu have no permissions to be here'));
}
