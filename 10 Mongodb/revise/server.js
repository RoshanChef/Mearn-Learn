const express = require('express');
const app = express();

const mongoose = require('mongoose');
const { Class, Student } = require('./db');
async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/revise', { useNewUrlParser: true, useUnifiedTopology: true });
}
connectDB();
app.use(express.json());

app.post('/create/class', async (req, res) => {
    try {
        const { name, students } = req.body; // Default to empty array if no students
        let newClass = await Class.findOne({ name });

        const studentArray = Array.isArray(students) ? students : [students];

        if (!newClass) {
            // Create class with students in one operation
            newClass = await Class.create({
                name,
                students: studentArray
            });
        }
        else {
            newClass = await Class.findOneAndUpdate({ name }, { $push: { students } }, { new: true });
        }

        // Populate students if needed (remove if you don't need this)
        await newClass.populate('students');

        res.status(201).json({
            success: true,
            message: 'Class created successfully',
            class: newClass
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create class',
            error: error.message
        });
    }
});

app.post('/create/student', async (req, res) => {
    try {
        const { name, age } = req.body;
        const newStudent = await Student.create({ name, age });
        res.status(201).json({
            success: true,
            message: 'Student created successfully',
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create class',
            error: error.message
        });
    }
})


app.get('/class', async (req, res) => {
    try {
        const classes = await Class.find({}).populate('students');

        res.status(200).json({
            success: true,
            message: 'Classes fetched successfully',
            classes: classes[0].students
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create class',
            error: error.message
        });
    }
}
)

app.listen(80, () => {
    console.log('Server is running on port 3000');
})

