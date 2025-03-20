function search() {
    console.log('Request sended ');
    // fetch(); 
}

let timer;

function DebounceSerach() {
    if (timer)
        clearTimeout(timer);
    timer = setTimeout(() => {
        search();
    }, 30);
}

input.addEventListner('change', () => {
    DebounceSerach();
})

DebounceSerach();
DebounceSerach();
DebounceSerach();
DebounceSerach();
DebounceSerach(); 