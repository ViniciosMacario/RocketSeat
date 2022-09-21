# ProtoType

Resumo:

>O JavaScript possui uma característica chamada **Prototype**, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.

*Sintaxe:*
 
```js
    __proto__
```

## ProtoType para cada tipo de Dado

*String*

```js
    console.log('Vinicios'.__proto__;)
    //Resposta: Uma série de Funcionalidades disponíveis e informações sobre o tipo de dado do objeto.
```

*Number*

Para usar essa característica do Prototype em Números, precisamos ficar atento, pois se você colocar apenas um '.', o JS vai identificar como se fosse um número float. A forma correta é adicionar um 'zero' e depois um '.' ,  veja abaixo;

```js
    console.log(23.0.__proto__;)
    //Resposta: Uma série de Funcionalidades disponíveis e informações sobre o tipo de dado do objeto.
```

*Boolean*

```js
    console.log(true.__proto__);
    //Resposta: Uma série de Funcionalidades disponíveis e informações sobre o tipo de dado do objeto.
```

### Propriedade

*lenght*: Ela faz a contagem de quantos carecteres um determinado elemento possui.

```js
    console.log('Vinicios'.length;)
    //Resposta: 8
```