let inputfile = document.querySelector('#input_file');
let dragViiew = document.querySelector('.drag_view');

inputfile.addEventListener('change', upload);

function upload(e) {
    let obj = inputfile.files[0];
    let url = URL.createObjectURL(obj);
    dragViiew.style.backgroundImage = `url(${url})`;
    dragViiew.textContent = '';
    dragViiew.border = 0;
}

let dragArea = document.querySelector('.drag_area');


dragArea.addEventListener('dragover', function (e) {
    e.preventDefault();
});

dragArea.addEventListener('drop', function (e) {
    e.preventDefault();
    inputfile.files = e.dataTransfer.files;
    upload(); 
})