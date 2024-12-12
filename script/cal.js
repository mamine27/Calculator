// variables to be used
let screened = document.getElementsByClassName('output')[0]
let buttons = document.querySelectorAll('button')


// event listener for each button
buttons.forEach(button => {

    button.addEventListener('click', () => {
        // based on the button clicked, the following will happen
        let cur = screened.innerHTML.length - 1 
        if (screened.innerHTML == '0'){
            screened.innerHTML = ''
        }

        // if the user clicked the equal button, the calculator function will be called
        if (button.innerHTML == '='){
            // the answer for the calculation will be displayed in the screen
            screened.innerHTML = manager(nw)
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

function manager(source){

    let a = Number(source[0])
    let n = source.length

    for(let i = 1 ; i < n ; i += 2){
        
        let cur = calculator(a,Number(source[i+1]),source[i])
        if (cur == 'ERROR!' || cur == NaN || cur == undefined){
            return 'ERROR!'
        }
        console.log(a)
        a = cur
    }

    return a

}


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
            if  (div(a,b) == false){
                return "ERROR!"
            }
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
