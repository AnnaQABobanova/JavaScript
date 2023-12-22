homework1

function drawTriangleFor(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
drawTriangleFor(5, '*')
