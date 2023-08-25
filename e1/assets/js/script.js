const days = {
    one: "monday",
    two: "tuesday",
    three: "wednesday",
    four: "thursday",
    five: "friday",
    six: "saturday",
    seven: "sunday",
}

const daysChecker = (day) => {
    if (day.classList.contains('one')) {
        one()
    }
    if (day.classList.contains('two')) {
        two()
    }
    if (day.classList.contains('three')) {
        three()
    }
    if (day.classList.contains('four')) {
        four()
    }
    if (day.classList.contains('five')) {
        five()
    }
    if (day.classList.contains('six')) {
        six()
    }
    if (day.classList.contains('seven')) {
        seven()
    }
}

let eleme = ''

const one = () => {
    eleme = document.querySelector(".days>.one")
    eleme.innerText = days.one
    eleme.style.backgroundColor = 'green'
    eleme.classList.toggle('text-[50px]')
    eleme.classList.toggle('w-[500px]')
}

const two = () => {
    eleme = document.querySelector(".days>.two")
    eleme.innerText = days.two
    eleme.style.backgroundColor = 'red'
    eleme.classList.toggle('text-[50px]')
    eleme.classList.toggle('w-[500px]')
}

const three = () => {
    eleme = document.querySelector(".days>.three")
    eleme.innerText = days.three
    eleme.style.backgroundColor = 'white'
    eleme.classList.toggle('text-[50px]')
    eleme.classList.toggle('w-[500px]')
}

const four = () => {
    eleme = document.querySelector(".days>.four")
    eleme.innerText = days.four
    eleme.style.backgroundColor = 'blue'
    eleme.classList.toggle('text-[50px]')
    eleme.classList.toggle('w-[500px]')
}

const five = () => {
    eleme = document.querySelector(".days>.five")
    eleme.innerText = days.five
    eleme.style.backgroundColor = 'pink'
    eleme.classList.toggle('text-[50px]')
    eleme.classList.toggle('w-[500px]')
}

const six = () => {
    eleme = document.querySelector(".days>.six")
    eleme.innerText = days.six
    eleme.style.backgroundColor = 'purple'
    eleme.classList.toggle('text-[50px]')
    eleme.classList.toggle('w-[500px]')
}

const seven = () => {
    eleme = document.querySelector(".days>.seven")
    eleme.innerText = days.seven
    eleme.style.backgroundColor = 'orange'
    eleme.classList.toggle('text-[50px]')
    eleme.classList.toggle('w-[500px]')
}