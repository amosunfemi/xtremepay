module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        localStorage.userdetail = res.user_detail
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  getFirstName() {
    var user = JSON.parse(localStorage.userdetail);
    if(user){
      return user.FirstName;
    }else{
      return '';
    }
  },

  getLastName() {
    var user = JSON.parse(localStorage.userdetail);
    if(user){
      return user.LastName;
    }else{
      return '';
    }
  },

  getUserDetail() {
    return localStorage.userdetail;
  },

  logout(cb) {
    delete localStorage.token
    delete localStorage.userdetail
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    $.ajax({
      type:"POST",
      url: 'http://localhost:3004/xtremepay/v1.0/security/token-auth',
      headers: {
        //'Authorization':'Basic xxxxxxxxxxxxx',
        //'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
        'Content-Type':'application/json'
      },
      dataType: 'json',
      data:JSON.stringify({"Username":email, "Password":pass, "PersonID":1, "Email":email}),
      success: function(data) {
        cb({
          authenticated: true,
          token: data['token'],
          user_detail: data['user_detail']
        })
      },
      error: function(error){
        cb({ authenticated: false })
      }
    });
    /*if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }*/
  }, 0)
}
