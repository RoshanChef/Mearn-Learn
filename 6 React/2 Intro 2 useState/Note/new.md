# React Event Handings

### one way is .. OnEvent_Name 
eg ... onClick, onChange, onSubmit etc ...
if you directly write this ```onClick={clickHandler()}``` it will call directly

```
function Component(){
  function clickHandler() {
    console.log('hello roshan');
  }
  return (
    <div className='ProductItem'>
      <button className='btn' onClick={clickHandler}>Add Event</button>
    </div>
  )
}

``` 
### Another Way is .. 
```

function Component(){
  function clickHandler() {
    console.log('hello roshan');
  }
  return (
    <div className='ProductItem'>
      <button className='btn' onClick={()=>{console.log('Hello Roshan Kalmathe');}}>Add Event</button>
    </div>
  )
}
```

### useState : 
#### If you want to change the content dynamically then useState is used 
## Note : 
#### useState only reRender the specific component where it used 

```
const [variable , setter_fnx] = useState('Initial value');

setter(cnt + 1)
or 
setter((val)=>val+1)
```

