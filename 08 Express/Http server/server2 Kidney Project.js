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
    let kidneys = Johan.kidneys;
    let total = kidneys.length;

    let Healthy_kid = 0;
    //Healthy kidneys 
    kidneys.forEach((kid) => {
        if (kid.health)
            Healthy_kid++;
    })
    let Unhealthy_kid = total - Healthy_kid;
    res.send(`Total ${total} \n\n Healthy ${Healthy_kid}\nUnhealthy ${Unhealthy_kid}`);
})


// middleware
app.use(express.json());

app.post('/', (req, res) => {
    let isHealth = req.body.health;
    users[0].kidneys.push({ health: isHealth });
    res.send('Successfully added');
})

app.put('/', (req, res) => {
    let total = users[0].kidneys;
    total.forEach((kid) => {
        kid.health = 1;
    });
    res.json({ "Unhealthy": "remove" });
})

app.delete('/', (req, res) => {
    let total = users[0].kidneys;

    if (total.length) {
        let replacements = total.filter((ele) => { return ele.health === true });
        if (replacements.length === users[0].kidneys.length) {
            res.send('No Unhealthy kindeys are Present')
        } else {
            users[0].kidneys.length = 0;
            users[0].kidneys = replacements;
            res.send('Unhealthy removed');
        }
    } else {
        res.send('Kidneys are not Present in your body')
    }
})


app.listen(80); 