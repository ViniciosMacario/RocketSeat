## Retornando valores dentro da função

> Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

```js
    /* Primeira Parte */

    const sum = function(number1, number2){
        console.log(number1 + number2);
    };

    let number1 = 10;
    let number2 = 5;

    console.log(`O número 1 é ${number1}`); //O número 1 é 10
    console.log(`O número 2 é ${number2}`); // O número 2 é 5
    console.log(`A soma  é ${sum(number1, number2)}`); // 15 -> A soma  é undefined -> Ao chegar nessa linha, ele ainda está construindo a frase, ele está interpolando os valores, então ele vai entrar nessa expressão(${sum(number1, number2)}) que declaramos "sum" executa a função e na execução da função, temos um console.log - "console.log(number1 + number2);", ou seja, ele vai antes mesmo de finalizar a frase informar o valor da soma, terminou de executar a função,ela vai retornar um valor, que no caso é "undefined".


    // Toda função retorna alguma coisa.
    // Quando uma função não tem a palavra chavê "return" no final do bloco de código, ela sempre retornará "Undefined".
    // Quando uma função identificar a palavra chavê "return" no final do bloco,ela vai finalizar o código retornando o valor logo a frente.

    /* Segunda Parte */

    const sum = function(number1, number2){
        total = number1 + number2;
        return total
    };

    let number1 = 10;
    let number2 = 5;

    console.log(`O número 1 é ${number1}`);
    console.log(`O número 2 é ${number2}`);
    console.log(`A soma  é ${sum(number1, number2)}`); 

    /*A solução para esse problema é colocar um "return" no final do código e o valor que queremos enviar*/
    // Agora quando ele iníciar a leitura da mesma expressão, ele vai registrar o number1, number2 e logo em seguida, vai fazer a soma e atribuir para a variável var "total", depois ele vai encontrar a palavra "return" e vai retornar o valor de "total"

    /* Terceira Parte */

    //O que aconteceria se tentarmos fazer um console.log() na palavra "total" que até então? Não atribuimos uma variável pra ela e mesmo assim deu certo!!

    const sum = function(number1, number2){
        total = number1 + number2;
        return total
    };

    let number1 = 10;
    let number2 = 5;

    console.log(`O número 1 é ${number1}`);
    console.log(`O número 2 é ${number2}`);
    console.log(`A soma  é ${sum(number1, number2)}`); 
    
    //Note que que se fizermos o console antes da função ser executada, vai dar erro de definição.
    console.log(total)
    //Note que total está em outro escopo e mesmo assim estamos conseguindo acessar ela, por que?
    //Note também que se você declarar qualquer variável para o "total", você não vai ter mais acesso a ela
    //Atenção: Não é uma boa prática fazer isso, você pode criar grandes problemas, pois essa "variável" pode existir em toda a aplicação, de modo que era para ela apenas existir naquele escopo em específico, respeitando o bloco.
    

    /* Quarta Parte */

    let total = 0;

    const sum = function(number1, number2){
        total = number1 + number2;
        return total
    };

    let number1 = 10;
    let number2 = 5;

    console.log(`O número 1 é ${number1}`);
    console.log(`O número 2 é ${number2}`);
    console.log(`A soma  é ${sum(number1, number2)}`); 
    
    
    console.log(total);
    // Veja que a variável let "total" não está recebendo seu devido valor e essa é a razão do por quê, você deve evitar de fazer aquela atribuição sem declarar a variável, a lógica é semelhante para a variável "var", evite de usar, use let e const.

    /* Quinta parte */

    let total = 0;

    const sum = function(number1, number2){
        let total = number1 + number2;
        return total
    };

    let number1 = 10;
    let number2 = 5;

    console.log(`O número 1 é ${number1}`);
    console.log(`O número 2 é ${number2}`);
    console.log(`A soma  é ${sum(number1, number2)}`); 
    
    
    console.log(total);
```
