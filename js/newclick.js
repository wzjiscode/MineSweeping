
document.oncontextmenu = (event) => {
    event.preventDefault()
}

const bindClickEvent = (con, child) => {
    let flag = 0
    con.addEventListener('mouseup', (event) => {
        window.event ? window.event.cancelBubble = true : event.stopPropagation()
        flag++
        if (flag < 2) {
            timer()
        }
        let self = event.target
        if (event.button === 0) {
            ssn(self, child)
            nums_ify(self)
            if (self.classList.contains('iconfonts')) {
                self.classList.remove('iconfonts')
            }
        }
        if (event.button === 2) {
            if (self.style.backgroundColor !== 'rgb(210, 222, 238)') {
                self.classList.add('iconfonts')
            }
        }
    }) 
}

const timer = function() {
    let mint = 0
    let ms = 0
    setInterval(function () {
        ms += 1
        if (ms === 60) {
            mint += 1
            ms = 0
        }
        e('#times').innerHTML = `${mint} : ${ms}`
    }, 1000)
}

// ssn是当前点击元素innerhtml为0的情况调用的，参数self是当前点击的元素,child是所有子元素
const ssn = function (self, child) {
    // boundary返回值为self上下左右的值
    let con_list = boundary(self)
    // 如果当前点击元素为0
    if (self.innerHTML === '0') {
        //遍历上下左右的值
        for (let i = 0; i < con_list.length; i++) {
            let m = con_list[i] - 1
            // 判断上下左右值是否在区间内
            if (m >= 0 && m <= child.length) {
                // 判断所有元素中上下左右元素为0 的情况
                if (child[m].innerHTML === '0') {
                    // 等于0显示的颜色和字体
                    child[m].style.backgroundColor = '#D2DEEE'
                    child[m].style.color = 'transparent'
                    self.innerHTML = '-1'
                    if (child[m].innerHTML === '0') {
                        ssn(child[m], child)
                    }
                } else if (child[m].innerHTML !== '0'){
                    nums_ify(child[m])
                }
            }
        }
    }
}

const boundary = function(self) {
    //拿到当前元素下标
    let index = self.index
    // log(index)
    //找到元素的上下左右下标
    let top = index - 9
    let bottom = index + 9
    let left = index - 1
    let right = index + 1
    if (index === 10 || index === 19 || index === 28 || index === 37 || index === 46 || index === 55 || index === 64) {
        return [top, bottom, right]
    } else if (index === 18 || index === 27 || index === 36 || index === 45 || index === 54 || index === 63 || index === 72) {
        return [top, bottom, left]
    } else if (index === 1) {
        return [right, bottom]
    } else if (index === 9) {
        return [left, bottom]
    } else if (index === 73) {
        return [top, right]
    } else if (index === 81) {
        return [top, left]
    } else if (index === 74 || index === 75 || index === 76 || index === 77 || index === 78 || index === 79 || index === 80) {
        return [top, right, left]
    } else if (index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8) {
        return [right, bottom, left]
    }
    else {
        return [top, bottom, left, right]
    }
}

const nums_ify = function(s) {
    s.style.backgroundColor = '#D2DEEE'
    let html = s.innerHTML
    let htmler = {
        '-1': 'transparent',
        '0': 'transparent',
        '1': '#3D53C2',
        '2': '#166902',
        '3': '#A7050F',
        '4': '#FF7200',
        '5': '#EB8E55',
        '6': '#87CEEB',
        '7': '#FF00FF',
        '8': '#872657',
    }
    let digui = htmler[html]
    if (digui !== undefined) {
        s.style.color = digui
    }  else {
        s.style.backgroundColor = '#D2DEEE'
        s.style.color = 'black'
        s.innerHTML = ''
        s.classList.add('iconfont')
        s.classList.add('icon-zhadan')
    }
}

const dataload = function(child) {
    let list = []
    for (let i = 0; i < child.length; i++) {
        list.push(parseInt(child[i].innerHTML))
    }
    let lei = f1()
    for (let i = 0; i < lei.length; i++) {
        list[lei[i]] = 9
    }
    let new_list = []
    for (let i = 0; i < lei.length; i++) {
        new_list.push(list.slice(i * 9, i * 9 + 9))
    }
    list = markedSquare(new_list)
    let concatlist = []
    for (let i = 0; i < list.length; i++) {
        let c = list[i]
        for (let j = 0; j < c.length; j++) {
            concatlist.push(c[j])
        }
    }
    for (let i = 0; i < child.length; i++) {
        child[i].index = i + 1
        child[i].innerHTML = concatlist[i]
    }
}

const chulei = function() {
    e('#bg-saolei-mian').style.display = 'block'
}