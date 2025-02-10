
function Generar(){
    const input = Number(document.getElementById("fibonacci").value);

    if (!Number.isInteger(input)){
        window.alert("Ingrese un numero Entero!");
        return;
    }
    if (input < 0){
        window.alert("Ingrese un numero Positivo mayor que 0");
        return;
    }

    let numbers = Fibonacci(Number(input - 1));

    let result = numbers.join(", ");


    document.getElementById("result").innerHTML = `${result}`;

}

function Fibonacci(n){
    if (n <=1){
        return n;
    }

    let sequence = [0, 1];

    for (let i = 2; i <= n; i++){
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence

}