const massive = require('massive');
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const controller = require('./controller')


const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(bodyParser.json());

// console.log(require('dotenv').config())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

// app.delete( '/api/music/:id', controller.delete );
app.get( '/api/books', controller.read );
// app.get('/api/music/:id', controller.getSong);
app.post( '/api/books', controller.post)
// app.get('/api/books/history', controller.history);


massive(process.env.CONNECTION_STRING).then(dbInstance => {
    console.log('connected')
    app.set('db', dbInstance);
}).catch(error=>{
    console.log('----error', error);
});

app.get('/auth/callback', (req, res) => {
    console.log('/callback hit');
    
    const payload = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      code: req.query.code,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    
    function tradeCodeForAccessToken(accessTokenResponse){
         console.log('payload', payload
         );
      return axios.post(`https://${process.env.REACT_APP_DOMAIN}/oauth/token`, payload)
    }
  
    function tradeAccessTokenForUserInfo(accessTokenResponse){
      const accessToken = accessTokenResponse.data.access_token;
      return axios.get(`https://${process.env.REACT_APP_DOMAIN}/userinfo/?access_token=${accessToken}`) 
    }
  
   
    function storeUserInfoInDataBase(response) {
        console.log('----response data', response.data );
        const auth0id = response.data.sub;
         req.app.get('db').find_user_by_auth0_id(auth0id).then(users=>{
            console.log('new user', users[0])
          if (users.length){
            const user = users[0];
            req.session.user = user;
            req.session.history = ['hello'];
            res.redirect('/login');
          } else {
            const createUserData = {
              auth0_id: auth0id,
              email: response.data.email,
              username: response.data.nickname,
              
            };
          req.app.get('db').create_user({...createUserData}).then(newUsers =>{
               console.log('new user', newUsers)
              let user = newUsers[0];
              req.session.user = user;
              req.session.history = [];
              res.redirect('/login');
            })
          }
        })   
      }
       
  
    tradeCodeForAccessToken()
    .then(accessToken=> tradeAccessTokenForUserInfo(accessToken))
    .then(userInfo => storeUserInfoInDataBase(userInfo))
    .catch(error => {
        console.log('​----------------------error', error );
        res.status(500).json({message: 'server error. see server terminal.'});
      });      
  })

  app.get('/api/userdata', (req,res) => {
    if (req.session.user) {
      res.send(req.session.user)
    }
  })

  app.get('/api/user-data', (req, res) => {
    res.json({ user: req.session.user });
  });

  app.get('/api/userListing/:id', controller.userListing)

app.listen(4000, ()=>{
    console.log('server is listening on port 4000'  );
    
});
