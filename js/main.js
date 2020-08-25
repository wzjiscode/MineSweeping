let log = console.log.bind(console)

const e = function(todo) {
    let element = document.querySelector(todo)
    if (element === null) {
        alert(`该元素${todo}在页面中未定义`)
    } else {
        return element
    }
}

const es = function(todo) {
    let element = document.querySelectorAll(todo)
    if (element === null) {
        alert(`该元素${todo}在页面中未定义`)
        return []
    } else {
        return element
    }
}

const loadlocalstorage = function () {
    let local = localStorage.pValue
    if (local === undefined) {
        return []
    } else {
        let jsonparse = JSON.parse(local)
        return jsonparse
    }
}

const todos = loadlocalstorage()