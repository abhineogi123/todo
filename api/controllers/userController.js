var mongoose = require('mongoose');

var User = mongoose.model('Users');

exports.create_a_user = function(req,res){
    var new_user = new User(req.body);
    new_user.save((err, user)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(user);
        }
    });
}

exports.check_availability = function(req,res){
    console.log('req:'+req.params.userId)
    User.findById(req.params.userId, (err,user)=>{
        if(!user){
            res.status(200).send({available:true})
        }
        else{
            res.status(500).send({available:false, error:err})
        }
    });
}

exports.validate_user = function(req,res){
    User.findById({_id:req.params.userId}, (err,user)=>{
        var sess= req.session;
        if(err){
            res.status(400).send(err);
        }
        console.log(user)
        if(user.password === req.body.password){
            sess.userId = req.params.userId
            res.status(200).send({valid:true});
        }
        else{
            res.status(500).send({valid:false, error:err});
        }
    })
}