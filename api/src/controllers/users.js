import { mongoose } from "@dekproject/scope";
import "../models/users";

var User = mongoose.model("User");

export let createUser = (req, res) => {
    var user = new User(req.body);

    user.save(function(err) {
        if (err) res.status(500).send(err.message).end();
        else res.send(user).end();
    });
}

export let getAllUsers = (req, res) => {
    User.find(function(err, users) {
        if (err) res.status(500).send(err.message).end();
        else res.send(users).end();
    });
}

export let updateUser = (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body, {
        new: true
    }, (err, user) => {
        if (err) res.status(500).send(err.message).end();
        else res.send(user).end();
    });
}

export let deleteUser = (req, res) => {
    req.user.remove((err) => {
        if (err) res.status(500).send(err.message).end();
        else res.send(req.user).end()
    });
}

export let getOneUser = (req, res) => {
    res.json(req.user);
}

export let getByIdUser = (req, res, next, id) => {
    User.findOne({ _id: mongoose.Types.ObjectId(id) }, (err, user) => {
        if (err) res.status(500).send(err.message).end();
        else {
            req.user = user;
            next();
        }
    });
}


