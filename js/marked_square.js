const clonedArray = function(array) {
    return array.slice(0)
}

const clonedSquare = function(array) {
    let m = []
    for (let i = 0; i < array.length; i++) {
        let s = array[i]
        m.push(clonedArray(s))
    }
    return m
}
const ify = function(i, j, square) {
    if (square[i] !== undefined && square[i][j] !== undefined && square[i][j] !== 9) {
        square[i][j] += 1
        return square[i][j]
    }
}

const markAround = function(square, i, j) {
    if (square[i][j] === 9) {
        ify(i,j + 1, square)
        ify(i, j - 1, square)
        ify(i - 1, j, square)
        ify(i + 1, j, square)
        ify(i + 1, j + 1, square)
        ify(i + 1, j - 1, square)
        ify(i - 1, j + 1, square)
        ify(i - 1, j - 1, square)
    }
    return square
}

const markedSquare = function(array) {
    let square = clonedSquare(array)
    for (let i = 0; i < square.length; i++) {
        let line = square[i]
        for (let j = 0; j < line.length; j++) {
            markAround(square, i, j)
        }
    }
    return square
}