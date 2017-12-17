var mongoose = require('mongoose');

var Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.status(500).send(err);
    res.status(200).send(task);
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.status(500).send(err);
    res.status(200).send(task);
  });
};

exports.create_task_for_user = function(req,res){
  var task = req.body;
  task['userId']=req.session.userId;

  console.log(task);
  var new_task = new Task(task);
  new_task.save(function(err, task) {
    if (err)
      res.status(500).send(err);
    res.status(200).send(task);
  });
}

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.status(400).send(err);
    res.status(200).send(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.status(400).send(err);
    res.status(200).send(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.status(500).send(err);
    res.status(200).send({ message: 'Task successfully deleted' });
  });
};


exports.get_all_tasks_for_user = function(req,res){
  console.log(req.session.userId)  
  Task.find({userId:req.session.userId}, (err,tasks)=>{
      if(err)
        res.send(err)
      res.send(tasks)
    })
}