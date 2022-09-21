# Casas decimais

Resumo:

> Nessa aula, vamos aprender a Manipular a quantidade de *'casas decimais'* de um número quebrado( float ), além disso, vamos aprender a trocar elementos, substituí-lo  por outros.


## Desáfios

1. Altere a quantidade de casas decimais de um número do tipo Float.
2. Substitua o ponto flutuante do número anterior e coloque a Vírgula(',') .

---

1. ### Primeiro Desáfio

O Método "* toFixed( )* " formata um número utilizando ponto flutuante, é passado como argumento a quantidade de casas decimais.

O Retorno: Será uma String representando o número.

*Sintaxe:*

```js
    number.toFixed();
```

*Solução:*

```js
let number = 1025.50306;
    console.log(number.toFixed(2));
    //Resultado: 1025.50
```

2. ### Segundo Desáfio


O Método *" replace( ) "* retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres);

O Retorno: Uma nova *"String"* com alguma ou todas as combinações do padrão substituído(s) pelo valor de substituição.

*Sintaxe:*

```js
    string.replace('Valor a ser substituído', 'Novo valor');
```

*Código:*

```js
let number = 1025.50306;
    console.log(number.replace('.', ','));
    //Resultado: NaN
```

Esse retorno aconteceu, pois a variável *"number"* é um número e o Método que estamos aplicando, é apenas funcional para Valores do Tipo *"String"*, não sendo possível fazer a Manipulação.

*Solução:*

```js
let number = 1025.50306;
    console.log(number.toFixed(2).replace('.', ','));
    //Resultado: 1025,50
```

Observação: Só é possível alterarmos o Ponto flutuante para uma Vírgula, pois o Método *'ToFixed( )'* transformou antes a variável *"number"* que até então era um valor do tipo *"Number"* para uma *"String"*.

## Conclusão

- Nem todo Método é aplicavel para todo tipo de dado.<br>
- Verificar a possibilidade de fazer uma conversão de tipo para acessar os Métodos.
- Você pode ter um Objeto recebendo vários Método, um atrelado ao outro, lembrando que a leitura é da Esquerda para Direita, então a Ordem importa.