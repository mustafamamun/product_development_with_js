
import passport from 'passport';
export default (app)=>{
  app.use('/service/*', passport.authenticate('local'), (req, res)=>{
      console.log(req.body);
      res.send(req.user);
  });
};
