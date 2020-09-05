const mongoose = require("mongoose");
const express = require("express");
const api = express();
const cors = require("cors");

api.use(express.urlencoded({extended: true}));
api.use(express.json());
api.use(cors());
api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

mongoose.connect("mongodb://localhost/OrganisateurVuex", {useNewUrlParser: true, useUnifiedTopology: true});

let tasksSchema = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    id: Number,
    createdAt: String,
    todo: Boolean
})

let tasksModel = mongoose.model("Tasks", tasksSchema);

api.post("/tasks", async function(req, res) {
    let newTask = new tasksModel({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        id: parseInt(req.body.id),
        createdAt: req.body.createdAt,
        todo: req.body.todo
    });

    await newTask.save();

    res.send();
});

api.get("/tasks", async function(req, res) {
    let tasks = await tasksModel.find();
    res.json(tasks);
});

api.get("/tasks/:id", async function(req, res) {
    let task = await tasksModel.find({id: req.params.id});
    res.json(task);
});

api.put("/tasks/:id", async function(req, res) {
    await tasksModel.updateOne({id: req.params.id}, {todo: req.body.todo});
    res.send();
});

api.get("/biggest", async function(req, res) {
    let results = await tasksModel.findOne().sort({id: -1});
    res.json(results);
})

api.delete("/tasks/:id", async function(req, res) {
    await tasksModel.deleteOne({id: req.params.id});
    res.send();
})



api.listen(8080);