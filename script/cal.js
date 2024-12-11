// variables to be used
let screened = document.getElementsByClassName('output')[0]
let buttons = document.querySelectorAll('button')


// event listener for each button
buttons.forEach(button => {

    button.addEventListener('click', () => {
        // based on the button clicked, the following will happen
        let cur = screened.innerHTML.length - 1

        // if the user clicked the equal button, the calculator function will be called
        if (button.innerHTML == '='){

            // split the string in the screen to get the numbers and the operator
            // first number is the first element in the array which is anumber 
            // second number is the third element in the array which is a number
            // the operator is the second element in the array which is a string

            let nw = screened.innerHTML.split(' ')
            let first = Number(nw[0])
            let second = Number(nw[2])
            let op = nw[1]

            // the answer for the calculation will be displayed in the screen
            screened.innerHTML = calculator(first , second , op)
        }
        // if the user wanted to clear the screen it will
        else if(button.innerHTML == 'C'){
            screened.innerHTML = ''
        }
        // if the user wanted to make the number negative
        else if(button.innerHTML == '-' && (screened.innerHTML[cur] == ' ' || screened.innerHTML == '')){
            screened.innerHTML += button.textContent
        }
        // if the button clicked is an operator add it to the screen with spaces
        else if (button.innerText == '+' || button.innerText == '-' || button.innerText == '/' || button.innerText == 'x'){
            screened.innerHTML += ' ' + button.textContent + ' '
        }
        // if the button clicked is a number add it to the screen
        else{
            screened.innerHTML += button.textContent
        }

    

    });
});




function calculator(a,b,op){
    // the operator function will take 3 parameters
    // a and b are the numbers to be calculated
    // op is the operator to be used

    function operator(a,b , op){
        if (op == '-'){
            return dif(a,b)

        }
        else if (op == '+'){
            return add(a,b)
        }
        else if (op == 'x'){
            return mul(a,b)
            
        }
        else if (op == '/'){
            return div(a,b)
        }
        // if the operator is not valid, the function will return an error
        return "ERROR!"
        
    }

    function add(a,b){
        return a + b

    }
    function dif(a,b){
        return a-b
    }

    function mul(a,b){
        return a * b
    }
    
    function div(a,b){
        if (b == 0){
            return false
        }
        return Number(a/b)
    }
    // the answer will be returned
    let ans = operator(a,b,op)

    return ans
    
}
