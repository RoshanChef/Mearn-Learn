function sendMessage(msg) {
    console.log('sending message ' + msg);
}

// without throttle
// sendMessage("Hi");
// sendMessage("Hello");
// sendMessage("How are you?");
// sendMessage("Goodbye take care");

// // Throttle

function throttle(func, delay) {
    let timerId;
    return function (...args) {
        if (!timerId) {
            func(...args);
            timerId = setTimeout(() => {
                timerId = null;
            }, delay);
        }
    }
};

const throttledSendMessage = throttle(sendMessage, 1000);

throttledSendMessage("Hi");
throttledSendMessage("Hello");
throttledSendMessage("How are you?");
throttledSendMessage("Goodbye take care");