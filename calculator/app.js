

// where i want numbers to display
const calculation = document.querySelector('.calculation')

const displayOnScreen = (number) => {
    calculation.innerText += number
}

// calculate when = sign is clicked


const calculate = (num1,num2,sign) => {
    if(sign === '+'){
        calculation.innerText = (parseInt(num1) + parseInt(num2))
    } else if(sign === '-'){
        calculation.innerText = (parseInt(num1) - parseInt(num2))
    } else if(sign === '*'){
        calculation.innerText = (parseInt(num1) * parseInt(num2))
    } else if(sign === '/'){
        calculation.innerText = (parseInt(num1) / parseInt(num2))
    }
    console.log("Answer =", calculation.innerText)
}


// clear screen

const clearScreen = () => {
    calculation.innerText = ""
}



//  split input by terms
const splitInput = () => {
    let input = calculation.textContent
    console.log(input)

    if(input.includes('+')){
        let solve = input.split('+')
        console.log("input:", solve)
        calculate(solve[0], solve[1], '+')
    } else if(input.includes('-')){
        let solve = input.split('-')
        console.log("input:", solve)
        calculate(solve[0], solve[1], '-')
    } else if(input.includes('*')){
        let solve = input.split('*')
        console.log("input:", solve)
        calculate(solve[0], solve[1], '*')
    } else if(input.includes('/')){
        let solve = input.split('/')
        console.log("input:", solve)
        calculate(solve[0], solve[1], '/')
    } else {
        console.log("add proper terms for calculation")
    }
}