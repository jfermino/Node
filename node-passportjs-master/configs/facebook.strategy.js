const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: 1432801583540606,
    clientSecret: "bb32cd4e4781ec9ba6fe5c568eb03ce7",
    callbackURL: "http://localhost:3000/oauthFace/callback"
  },
  function(accessToken, refreshToken, profile,done ) {
    return done(null,profile);
  }
));

