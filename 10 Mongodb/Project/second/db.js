const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;



// schema
const User = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean
});


/*  
    why schema ? 
    because we want to our application to strict
*/
// mongoose.model(Collection , Schema)

// Data model
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}