
const fs = require('fs');

function num_words(filePath) {
    let data = fs.readFile(filePath, 'utf-8', (err, data) => {
        let cnt = 0;
        for (i = 0; i < data.length; i++) {
            if (data[i] === ' ') {
                cnt++;
            }
        }
        console.log(cnt + 1);
    });
}

num_words(process.argv[2]);
