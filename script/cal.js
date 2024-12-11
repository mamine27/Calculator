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
        return a/b
    }

    let ans = operator(a,b,op)
    if (ans === false){
        console.log("ERROR!")
    }
    else{
        console.log(ans)
    }
}
