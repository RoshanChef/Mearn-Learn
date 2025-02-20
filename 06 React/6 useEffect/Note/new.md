# useEffect in React
    ## syntaxt : 
  

    mount : component ui per load thay gayo 
    unmount : component ui per thi remove keri didhu 

    useEffect hook 
	    Allows you to perfom side effect in your components 
	    accept two args useEffect(function, dependency)
	    Runs after rendering components

    useEffect(()=>{
        //second
        return ()=>{
             //first
        }
    } , [third])

        second  : side effect function or runs on mount(render the component)
        first   : runs when unmount the component
        third   : dependency list 



    ## variant 1 -> Every Render
    // useEffect(() => {
    //     console.log('UI Rendering happened ... ');
    // })

    ## variant 2  -> First Render 
     useEffect(() => {
         console.log('UI Rendering is happened overhere ... ');
     }, []) 

     ## variant 3 -> whenever dependency is changed 
     useEffect(() => {
         console.log('changes are done ... ');
         setWidth(window.innerWidth);
         console.log(window.innerWidth);
     }, [window.onresize]);

    ## variant 4 
     useEffect(() => {
         //second ..
         console.log('listner is added ...'); //second this
         //first ..
         return (() => { //first this
             console.log('listner removed ... ');
         })
     }, [text]);

