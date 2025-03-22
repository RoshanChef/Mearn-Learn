function search(query) {
    console.log('search for ', query);
    // fetch call .. 
    // fetch(url+${word})
}

// search('H');
// search('Hi');
// search('Hi ');
// search('Hi T');
// search('Hi Th');
// search('Hi The');
// search('Hi Ther');
// search('Hi There');
// search('Hi There!');
// search('Hi There!!');

let timerId;
function debounce(fnx, delay) {
    return function (word) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(function () {
            fnx(word);
        }, delay);
    }
}

let DebounceSerach = debounce(search, 300);

DebounceSerach('H');
DebounceSerach('Hi');
DebounceSerach('Hi ');
DebounceSerach('Hi T');
DebounceSerach('Hi Th');
DebounceSerach('Hi The');
DebounceSerach('Hi Ther');
DebounceSerach('Hi There');
DebounceSerach('Hi There!');
DebounceSerach('Hi There!!');
