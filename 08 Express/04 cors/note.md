### origin 
Origin :=> combination of protocol , domain and port
    
```
    Protocol : https:// http:// 
    Domain : xyz.com
    Port : 12

```

```
    app.use(cors({
  origin: ...,                  // as shown above
  credentials: true,            // allow cookies
  methods: ['GET', 'POST'],     // restrict allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // restrict headers
}));

```

