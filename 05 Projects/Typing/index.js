let words = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam reiciendis quae vero aliquid inventore numquam dignissimos eligendi suscipit sequi nihil accusantium quos quo ad aspernatur, delectus repellendus, ullam optio ducimus sed doloremque placeat! Deleniti recusandae mollitia dolor velit quidem quia, earum odit sit nihil suscipit quam molestias dolorem, cum ab consequuntur, pariatur repellendus laudantium omnis perferendis exercitationem labore harum ullam. Nulla esse enim corporis cum, doloremque temporibus ipsam quaerat at hic, earum nisi suscipit unde possimus cumque perferendis exercitationem velit? Ratione facere aperiam quae temporibus veniam accusamus tempore sapiente necessitatibus quidem doloribus eum officiis exercitationem, dolores odit veritatis velit deleniti! Ipsum a, harum expedita sapiente corrupti nisi maiores dolorum cupiditate eum, sed porro sunt accusamus incidunt beatae rem. At quidem impedit neque cum, officiis accusamus ex nemo dolorum vero ipsum cupiditate, blanditiis eius excepturi? Quod ipsum veritatis voluptatem deleniti excepturi officiis animi officia hic, explicabo, dolorum, cum sapiente vero possimus qui sit? Esse, itaque quasi! Tempore accusamus, excepturi, optio animi, impedit non quaerat mollitia qui dolores consectetur laborum doloremque culpa reprehenderit vitae at corporis ducimus ut commodi! Ipsam, ex sint iste cupiditate aut, ab est praesentium repudiandae velit doloribus, laborum doloremque? Nostrum, facere odit nemo rem maxime repudiandae provident";
words = words.split(' ');

function randomWord() {
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

function HtmlEle(word) {
    return `<div class='word'>
    <span class='letter'>${word.split('').join('</span><span class="letter">')}</span>
    </div>
    `;
}

function Typer() {
    document.querySelector('.words').innerHTML = '';
    for (let i = 0; i < 200; i++) {
        document.querySelector('.words').innerHTML += HtmlEle(randomWord());
    }

    document.querySelector('.letter').classList.add('current');
    document.querySelector('.word').classList.add('current');
}
Typer();


document.querySelector('.game').addEventListener('keyup', (event) => {
    const ky = event.key;
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter.innerHTML;
    const isLetter = ky.length === 1 && ky !== ' ';


    if (isLetter) {
        if (ky === expected) {
            currentLetter.classList.add('correct');
        }
        else {
            currentLetter.classList.add('incorrect');
        }
        currentLetter.classList.remove('current');
        currentLetter.nextSibling.classList.add('current');
    }
})