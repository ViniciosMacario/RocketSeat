# Contando caracteres e digitos

Resumo:

>Para contar a quantidade de caracteres em uma string é possível usar o método length( ), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.

## String

Vamos contar a quantidade de Caracteres de uma String, veja um exemplo; 

Código

```js
    let word = "Paralelepipedo";
    console.log(word.length);
    //Resposta: 14
```

## Number

Vamos contar a quantidade de Digitos de um *"Number"*, veja um exemplo;

*Código:*

```js
    let number = 251789562;
    console.log(number.length);
    //Resposta: Undefined - pois o number não recebe propriedade '.length'
```

*Solução:*

Vamos transformar o tipo de dado *"Number"* em uma *"String"* e após isso, podemos utilizar a propriedade .lenght

```js
    let number = 251789562;
    console.log(String(number).length);
    //Resposta: 9
```
