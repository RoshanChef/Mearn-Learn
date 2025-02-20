### How many you can send data using get requests
using query parameters
```http://localhost/?n=10&m=20```
``` app.get('/',(req, res) =>{req.query.n , req.query.m})```

using wildcard query parameters
```http://localhost/first/second/third/...```

``` app.get('/:first/:second',(req, res) =>{req.params.first , req.params.second})```

### serve files use the following one
```
app.get('/',(req, res) =>{
    req.sendFile(filePath); 
})
```