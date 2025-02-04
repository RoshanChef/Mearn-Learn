### How to Define db 
#### 1 Define the schema
#### 2 Define the model 
#### 3 Export the model 

#### step 1 
```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// schema
const User = new Schema({
    name: String,
    email: String,
    password: String
});

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean
});

```

#### step 2
// mongoose.model('Collection' , Schema)

```
// Data model
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);
```

#### step 3
```
module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
} 
```