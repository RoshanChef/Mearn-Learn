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

### Modal Methods
#### read methods
```
Model.find(conditions)
Model.findOne(conditions)
Model.findById(id)
Model.countDocuments(filter)
Model.create(doc)
```

#### update methods
```
- Updates one document
updateOne(filter, update[, options][, callback]) 

- Updates many documents
updateMany(filter, update[, options][, callback]) 

- Finds by ID and updates
findByIdAndUpdate(id, update[, options][, callback]) 

- Finds one and updates
findOneAndUpdate([conditions], update[, options][, callback]) 

- Replaces one document
replaceOne(filter, doc[, options][, callback]) 

```
Delete Methods

```
- Deletes one document
deleteOne([conditions][, callback]) 

- Deletes many documents
deleteMany([conditions][, callback]) 

- Finds by ID and deletes
findByIdAndDelete(id[, options][, callback]) 

- Finds one and deletes
findOneAndDelete([conditions][, options][, callback]) 
```


### Example of Custom Instance Method:

```
userSchema.methods.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};
```