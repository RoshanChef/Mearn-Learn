let btn = document.querySelector('.btn');
let head1 = document.querySelector('.h1');
let head2 = document.querySelector('.h2');
let head3 = document.querySelector('.h3');

/*
Promise chain 
attaching multiple then Handler on single promise
*/
btn.addEventListener("click", () => {

    addColor(head1, 'red', 1000)
        .then(() => {
            return addColor(head2, "green", 1000);
        })
        .then(() => {
            return addColor(head3, 'royalblue', 1000);
        })
})


function addColor(Element, Color, Time) {
    return new Promise((resolve, reject) => {
        if (Element) {
            setTimeout(() => {
                
                let v = performance.now();
                Element.style.color = Color;
                console.log(Color, 'time ' , Math.round(v/1000));
                resolve();
            }, Time);
        }
        else {
            reject(new Error('element is not found'));
        }
    })
}