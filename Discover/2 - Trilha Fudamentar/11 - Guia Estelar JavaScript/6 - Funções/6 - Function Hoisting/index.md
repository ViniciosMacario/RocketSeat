## Function Hoisting

> O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.

```js
    //Primeiro estamos executando a função e depois criamos a função de fato.
    sayMyName();

    //Uma função criada desta forma, ela automáticamente sofre o "Hoisting".
    funcion sayMYnAME(){
        console.log('Vinicios');
    };

    //Por de baixo é como SE fosse assim;
    //1º Declaramos a função

    funcion sayMYnAME(){
        console.log('Vinicios');
    };
    //2º Executamos a função
    sayMyName();


    // Agora, se você atribuir uma função a uma variável, o que acontecerá

    // const 

        sayMYnAME();

        //Temos uma constante recebendo uma função anõnima 
        const sayMyName = function(){
            console.log('Vinicios');
        };

        // Erro - Uncaught ReferenceError: Cannot access 'sayMyName' before initialization  
    // const 

    // var 
        sayMYnAME();

        var sayMyName = function(){
            console.log('Vinicios');
        };
        //ERROR - Uncaught TypeError: sayMyName is not a function



        //1º A palavra chavê "var" fará com que ocorra a eleveção somente na parte "var sayMyName" - fazendo com que ela seja uma variável undefined, pois não recebeu nenhum valor de atribuição
        // 2º Logo em seguida, ele vai tentar executar a "função" que na verdade não é uma função e sim uma variável.
        //3º A variavel acima não é uma função, logo temos um erro - ERROR - Uncaught TypeError: sayMyName is not a function

        var sayMyName;

        sayMyName();

        sayMyName = function(){
            console.log('Mayk');
        }
    // var 


```