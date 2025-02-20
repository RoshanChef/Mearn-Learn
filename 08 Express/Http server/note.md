### How to create simple https server

```res.send(string message)``` if you are not sending these it will be hung.
```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(string message);
});


app.listen(1180); 

```

### Different res methods

```res.json()```

```
app.get('/', (req, res) => {
    res.json({
        name: 'Roshan',
        age: 23
    });
});
```

OR 
```
app.get('/', (req, res) => {
    res.send({
        name: 'Roshan',
        age: 23
    });
});
```

### How to get Input from query parameters
```http:/localhost:3000/?n=20```

``` req.query //object ```
```
app.get('/', (req, res) => {
    let n = parseInt(req.query.n);
    let ans = calc(n);
    res.send(ans.toString());
});

```

### Note here is req.query is always a string
### How can you pass multiple parameters using query parameters

```http:/localhost:3000/?n=20&m=30&z=90....```


### Request Methods 

#### get => Ask something new like add(a,b) 
#### post => Create something & insert something
#### put => Update something
#### delete => Delete something


### req.body
if you are trying to post from postman body then use the following middleware

app.use(express.json());

``` req.body will be object```

in Postman ... 
```
{
    "heath": true
}
```
server will be
```
req.body.health 
```

## You can also send status code with response
eg .. 

```res.status(status_code).send('message'); ```

## How do you pass the parameters in url of request

```http://localhost/first/second```

```http://localhost/239  58208 dhk/adklj   lkj al```

for getting these parameters

```
app.get('/:first/:second', (req, res) => {
    let a = req.params.first;
    let b = req.params.second;
    console.log('first ', a, '\nsecond ', b);
    res.send('Any request here handles');
})
```
