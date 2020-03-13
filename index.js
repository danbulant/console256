const readline = require("readline");
const render = require("./src/render");

const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
const MAX_COLORS = 360;

const keepAlive = new readline.Interface({
    input: process.stdin,
    output: process.stdou
});

const WIDTH = process.stdout.columns;
const HEIGHT = process.stdout.rows;

const view = [];

for(var row = 0; row < HEIGHT; row++){
    view[row] = [];

    for(var column = 0; column < WIDTH; column++){
        const val = arrAvg([(row / HEIGHT) * MAX_COLORS, (column / WIDTH) * MAX_COLORS]);
        view[row][column] = {0: val, 1: " "};
    }
}

view[0][0] = {0: 15, 1: " "};
view[HEIGHT - 1][WIDTH - 1] = {0: 15, 1: " "};

render(view);

var counter = 0;
setInterval(() => {
    for(var row = 0; row < HEIGHT; row++){
        for(var column = 0; column < WIDTH; column++){
            const val = arrAvg([(row / HEIGHT) * MAX_COLORS - counter, (column / WIDTH) * MAX_COLORS - counter]) + counter;
            view[row][column] = {0: val, 1: " "};
        }
    }

    render(view);
    counter++;

    if(counter > MAX_COLORS) counter = 0;
}, 300);