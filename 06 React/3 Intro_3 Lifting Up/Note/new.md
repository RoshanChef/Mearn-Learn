# React Props Lifting Up. 

### How to pass child component things to parent component 
```Props function```
one way is .. Direct Parent 

```
function Component(){
  function clickHandler() {
    console.log('hello roshan');
  }
  return (
    <div className='ProductItem'>
      <A />  
    </div>
  )
}


function A({ fnx }) {
    return (
        <div>
            A Element
            <B fnx = {fnx}></B>
        </div>
    )
}

function B({ fnx }) {
    return (
        <div>
            B Element
            <C fnx= {fnx}></C>
        </div>
    )
}


function C({ fnx }) {

  function clickHand(){
    console.log("clickHand");
    fnx(); 
  }

  return (
        <div onClick= {clickHand}>
            C Element
        </div>
    )
}

``` 
### Another Way is .. 
```
Direct see the file
```

