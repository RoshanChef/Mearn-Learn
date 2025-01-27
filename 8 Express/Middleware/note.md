## Middleware 
which checks the condition for allow or not allow someone on route or endpoints access

## Middleware function
Middleware functions can be breaks the request-response cycle 
it can be modify the req-res 

A single middleware can be used for multiple endpoints


```
function middleware_fnx(req, res, next) {
    if() next();
    else res.status(403).send(error_msg); 
}

app.get('/', middleware_fnx ,(req, res){})

```

### ``` app.use(middleware) ``` dont't type again & again 

only works on below routes


### Error Handing middleware 

Note ```write after the all the endpoints```

app.use(function(err, req, res, next){ });


