const express = require('express');
const app = express();

let users = [{
    patient: 'Johan',
    kidneys: [
        {
            health: false
        }
    ]
}]

// routes
app.get('/', (req, res) => {
    let Johan = users[0];
    let Johan_kidney = Johan.kidneys;
    let noOfkidney = Johan_kidney.length;
    let noOfHealthy = 0;

    for (let i = 0; i < noOfkidney; i++) {
        if (Johan_kidney[i].health) {
            noOfHealthy++;
        }
    }
    let noOfUnHealthy = noOfkidney - noOfHealthy;
    let num = 12;
    res.json({
        Total: noOfkidney,
        Healthy: noOfHealthy,
        UnHealth: noOfUnHealthy,

    })
})
app.use(express.json());
app.post('/', (req, res) => {
    let isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        health: isHealthy
    })

    res.json({
        msg: 'done'
    })
})


app.put('/', (req, res) => {
    let kidneys = users[0].kidneys;
    for (let i = 0; i < kidneys.length; i++) {
        kidneys[i].health = 1;
    }

    res.json({
        update: 'sucess'
    })
})

// calll something do it. 
app.delete('/', (req, res) => {
    let kidneys = users[0].kidneys;
    let new_kidneys = [];
    for (let index = 0; index < kidneys.length; index++) {
        if (kidneys[index].health) {
            new_kidneys.push(kidneys[index]);
        }

    }
    users[0].kidneys = new_kidneys; 
    console.log(users[0].kidneys);

    res.json({
        "remove": "done"
    })
})




app.listen(80); 