const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');
/* 
/folder => number of files 
/file => content of file
*/

app.get('/:folder', (req, res) => {
    let folder = req.params.folder;
    let folder_path = path.join(__dirname, '../' + folder)

    if (fs.existsSync(folder_path)) {
        console.log(fs.readdir(folder_path));
        let files = fs.readdirSync(folder_path);
        files.forEach((file) => {
            console.log(file);
        })
        res.status(202).send(folder_path + "\nsuccess");
    } else
        res.status(403).send('No folder exist');
})

app.get('/:folder/:file', (req, res) => {

    let folder = req.params.folder;
    console.log(folder);
    let folder_path = path.join(__dirname, '../' + folder)
    console.log(folder_path);
    if (fs.existsSync(folder_path)) {
        let file = req.params.file;
        let val = fs.readFileSync(path.join(__dirname, file));
        res.status(201).send(val);
    }
    else {
        res.status(403).send('No Files exist');
    }
})

app.listen(80);  