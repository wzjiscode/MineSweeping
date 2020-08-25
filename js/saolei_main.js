const savelocalstorage = function(todo) {
    todos.length = 1
    todos.push(todo)
    localStorage.pValue = JSON.stringify(todos)
}

const pfunc = function(event) {
    let self = event.target
    let value = self.innerText
    savelocalstorage(value)
    window.location = 'qipan.html'
}

const bindEventP = function() {
    let saolei_p = e('.bg-saolei-p')
    saolei_p.addEventListener('click', pfunc)
}

const bindEvent = function() {
    bindEventP()
}

const __main = function() {
    bindEvent()
}
__main()