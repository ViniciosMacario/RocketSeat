## Arrays

> Para criarmos um vetor utilizamos [ ] envolvendo os valores, por exemplo: const animals = [ "Lion", "Monkey" ], para acessar esses valores usamos a posição do valor no vetor, começando por 0, por exemplo: console.log(animals[0]). Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length, por exemplo: animals.length.

```js
    // Arrays

    const animals = [ 'Lion', 'Monkey', 'cat', 'dog', { name: 'fish', age: 1} ];
    
    // Vamos acessar todas as informações do Array
    console.log(animals)


    // Queremos apenas um item em especifico do array
    console.log(animals[0])

    // length serve para saber quantos itens tem dentro de um array

    //Vamos acessar um objeto dentro de um array
    console.log(animals[4])

     //Vamos acessar uma propriedade dentro de um objeto contido numa array
    console.log(animals[4].name)


    //É uma boa prática separar tipos de dados diferentes, por exemplo aqui, não é recomendado colocar um objeto dentro de uma array com outras strings
    console.log(animals[4].name)
```