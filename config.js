module.exports = {
    jwtSecret : "secret",
    jwtSession : {
        session : false
    },
    userRoles : {
        guest : 'guest',
        user : 'user',
        admin : 'admin'
    }
    /*,
    userAccessLevel : {
        guest : userRoles.guest || userRoles.user || userRoles.admin,
        user : this.userRoles.user || this.userRoles.admin,
        admin : this.userRoles.admin
    }*/
}