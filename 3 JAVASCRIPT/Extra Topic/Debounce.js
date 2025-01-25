function search() {
    console.log('Request sended ');
    // fetch(); 
}

let timer;
function DebounceSerach() {
    clearTimeout(timer);
    timer= setTimeout(() => {
         search();
    }, 30);
}

DebounceSerach();
DebounceSerach();
DebounceSerach();
DebounceSerach();
DebounceSerach(); 