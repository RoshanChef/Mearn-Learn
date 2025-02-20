# React Props passing

### Any Variable show in component
```
function Component(){
    let title = 'Karn' 
    return (
        <div>
            {title}
        </div>
    )
}
```
### Props passing to another component
```
//first component
function Component(){

    let title  = 'Niram' ; 
    let day = '20' ; 
    let month = '5'; 
    let year = '2002'; 

    return (
    <div>
        <Item day={day} title={title} month={month} year={year}> </Item>
    </div>
   )
}
//second component
function Item(props){
    //object of properties
    console.log(props);
    return (
        <div>
        <ul>
            <li>{props.title}</li>
            <li>{props.day}</li>
            <li>{props.month}</li>
            <li>{props.year}</li>
     </ul>
        </div>

    )

}
```

### If you want to allow the Component inner text then .. 

```
function Component(){

    return (
        <div>
            //By default not allowed
            <Item>
                Inner Text
            </Item>
        </div>
    )
}

function Item(props){
     return(
        <div>
            {props.children}
        </div>
    )
}
```

