let isAuthenticated = true

const login = function(cb){
    this.isAuthenticated = true
}

const loggedIn = function () {
    return isAuthenticated
  }

const logout = function(cb){
    this.isAuthenticated = false
}

export default {loggedIn, login, logout}
