let level = todos[1]

const template = function() {
    return `<p class="minesweep">0</p>`
}

const operatorLevel = function(level) {
    let dict = {
        '初级': 0,
        '中级': 1,
        '高级': 2,
    }
    if (dict[level] !== undefined) {
        primary(dict[level])
    }
}

const primary = function(num) {
    if (num === 0) {
        for (let i = 0; i < 81; i++) {
            bindEventCheckerBorder()
        }
        let con = e('.saolei-content')
        let child = con.children
        dataload(child)
        bindClickEvent(con, child)
    }
}

const bindEventCheckerBorder = function() {
    let MineSweeping = e('.saolei-content')
    let html = template()
    MineSweeping.insertAdjacentHTML('beforeend', html)
}

const __main = function() {
    operatorLevel(level)
}

__main()