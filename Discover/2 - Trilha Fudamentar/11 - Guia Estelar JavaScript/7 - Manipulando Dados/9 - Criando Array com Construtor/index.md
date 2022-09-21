# Criando array com construtor

Resumo:

> Nessa aula, vamos aprender a criar um Array usando Construtor

## Desáfios

1. Crie um Array usando o Construtor

---

1. ### Primeiro Desáfio

O construtor *" Array( )"* é usado para criar objetos Array.

**O Retorno:** Um novo Array.

*Sintaxe:*

```js
    new Array("Elemento1",2,3);
    // ou
    Array("Elemento1",2,3);
    //Podemos instanciar o método do construtor ou não.
```

*Código:*

```js
    // forma tradicional
    let array1 = [0, 1, 2, 3, 4, 5]; 

    // forma de criar um array usando um construtor
    let arrayNew1 = new Array("banana", "laranja", "morango", "Abacaxi");

    // não necessariamente preciamos instanciar o método usando o "new".
    let arrayNew2 =  Array("carro", "moto", "avião", "barco"); 

    console.log(arrayNew1);
    //Resposta: ['banana', 'laranja', 'morango', 'Abacaxi']
    console.log(arrayNew2);
    // Resposta: ['carro', 'moto', 'avião', 'barco']
```

Primeiro temos um Array escrita de uma forma tradicional, logo em seguida temos duas forma de escrever um Array usando o construtor *"Array( ) "*, uma usando o instanciador "new" e o outro não, o resultado final é o mesmo, você só deve se atentar a passar como parâmetro os valores da Array.

## Conclusão

- É possível criarmos um Array de três formas diferentes: 
    - Forma tradicional -> **let array1 = [0, 1, 2, 3, 4, 5];** 
    - Com instanciador -> **let arrayNew1 = new Array("banana", "laranja", "morango", "Abacaxi");**
    - Sem o instanciador -> **let arrayNew2 =  Array("carro", "moto", "avião", "barco");**