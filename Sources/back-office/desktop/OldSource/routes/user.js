'use strict';

var rest = require('restler');

var api_security_url = 'http://localhost:3004/xtremepay/v1.0/security';

exports.list = function(req, res) {
  res.status(200).end();
};


// login users using the jwt auth02 mechanism
exports.login = function(req, res) {
  var user_details = {
    'Username': 'test',
    'Password': 'test',
    'PersonID': 1,
    'Email': 'sunday.amosun@gmail.com'
  }; //req.body;
  rest.post(api_security_url + '/token-auth', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(user_details),
  }).on('complete', function(data, response) {
    //if (response.statusCode == 200) {
    console.log(response.rawEncoded);
    res.status(response.statusCode).send(response.rawEncoded);
    //}
  });
}

// logout user
exports.logout = function(req, res) {
  var token = req.headers['authorization'];
  console.log(req.headers);
  rest.get(api_security_url + '/logout', {
    headers: {
      'Authorization': token
    }
  }).on('complete', function(data, response) {
    console.log(response.rawEncoded);
    res.status(response.statusCode).send(response.rawEncoded);
  });
}
