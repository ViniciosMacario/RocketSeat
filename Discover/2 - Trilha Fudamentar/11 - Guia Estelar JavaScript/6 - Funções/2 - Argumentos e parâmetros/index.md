## Argumentos e parâmetros

> Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

```js
   //function(){} é chamada de função anônima, pois não possui um nome
   // funcion expression
   const sum = function(number1, number2){
        console.log(number1 + number2)

   }

   sum(2,3) //Estamos passando argumentos para um função executada enquanto nessa função criada "function(number1, number2)" são considerados como parãmetros(ele só existe dentro da Função em específico - Escopo diferente) da função.

   // Vamos imaginar que poder de baixo dos panos, o JavaScript está pegando os valores que passamos no "sum(2,3)" e está fazendo a seguinte ação --> let number1 = 2 e let number2 = 3, ele vai fazer a atribuição de acordo com a onde que colocamos no parametro

    //Outra forma de escrever
   function sum(number1, number2){
    console.log(number1 + number2);
};

sum(20,5)
```