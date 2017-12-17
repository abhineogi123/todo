module.exports = function(app) {
    var users = require('../controllers/userController');
  
    // users Routes
    app.route('/api/user')
        .post(users.create_a_user)
  
  
    app.route('/api/user/validate/:userId')
      .post(users.validate_user)
    
    app.route('/api/users/checkAvailability/:userId')
        .post(users.check_availability)
  };