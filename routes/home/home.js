const express = require('express');
const router = express.Router();
const Project = require('../../models/project');

//TODO:- Create user from ID

router.get('/', (req, res, next) => {
  Project.find({}).populate('userID', 'username _id').exec((err, projects) => {
    if (err) {next(err);}
    console.log(projects);
    res.render('home/home', {projects, "message": req.flash("error")});
  });
});

module.exports = router;
