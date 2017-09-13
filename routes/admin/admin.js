const express = require('express');
const router = express.Router();
const User               = require('../../models/user')
const Project            = require('../../models/project')
const bcrypt = require("bcrypt");

router.get('/', (req, res, next) => {
    User.find({}, (err, users ) => {
        if (err) { next(err)}
    Project.find({}, (err, projects ) => {
        if (err) { next(err)}
    res.render('admin/admin', {users: users, projects: projects})
    });
    });
});

router.post('/createuser', (req, res, next) => {
    const newUser = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        email: req.body.email,
        role: "User"
    })
      
    newUser.save((err) => {
        if (err) {return next(err)}
        res.redirect('/admin');
    })
});

router.post('/edituser/:userID', (req, res, next) => {
    
    res.redirect('admin/admin');
    })

router.post('/deleteuser/:userID', (req, res, next) => {
    User.findByIdAndRemove(req.params.userID, (err, users) => {
        if (err) { return next(err) }
        User.find({}, (err, users) => {
        
        if (err) { return next(err) }
            res.redirect('/admin')
      });
    });
})

router.post('/createproject', (req, res, next) => {
    const newProject = new Project({
        projectName: req.body.projectName,
        userID: req.body.userID,
        fileHTML: req.body.fileHTML,
        fileCSS: req.body.fileCSS,
        fileJS: req.body.fileJS,
    })
      
    newUser.save((err) => {
        if (err) {return next(err)}
        res.redirect('/admin');
    })
});

router.post('/deleteproject/:projectID', (req, res, next) => {
    Project.findByIdAndRemove(req.params.projectID, (err, projects) => {
        if (err) { return next(err) }
        Project.find({}, (err, projects) => {
        
        if (err) { return next(err) }
            res.redirect('/admin')
      });
    });
})


module.exports = router;