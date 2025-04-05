const mongoose = require("mongoose");
const { Schema } = mongoose;

const classes = new Schema({
    name: String,
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }]
})

const student = new Schema({
    name: String,
    age: Number,
})


const Class = mongoose.model("Class", classes);
const Student = mongoose.model("Student", student);

module.exports = { Class, Student };ww