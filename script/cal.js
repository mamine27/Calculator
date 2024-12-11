let screened = document.getElementsByClassName('output')[0]
console.log(screened)
let buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML == '='){
            let nw = screened.innerHTML.split(' ')
            let first = Number(nw[0])
            let second = Number(nw[2])
            let op = nw[1]
            
            screened.innerHTML = calculator(first , second , op)
        }
        else if(button.innerHTML == 'C'){
            screened.innerHTML = ''
        }

        else if (button.innerText == '+' || button.innerText == '-' || button.innerText == '/' || button.innerText == 'x'){
            screened.innerHTML += ' ' + button.textContent + ' '
        }
        
        else{

            screened.innerHTML += button.textContent

        }

    

    });
});
console.log(buttons)
function calculator(a,b,op){
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
        else{
            return false
        }
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

    let ans = operator(a,b,op)
    return ans
    
}
