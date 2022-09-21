# Strings para Arrays

Resumo:

> Nessa aula, vamos aprender a transformar cada palavra de uma *String* em um elemento de um *Array*.

## Desáfios

1. Transforme uma cadeia de caracteres em um Array, no qual cada caractere, deve possuir uma posição única.

---

1. ### Primeiro Desáfio

O Método Array.from() transforma uma String em uma Array.

**O Retorno:** Um novo Array.

*Sintaxe:*

```js
    Array.from()
```

*Código:*

```js
    let word = 'Algoritmos';
    console.log(Array.from(word));
   //Resultado: Array(10)
```

Observamos que temos uma variável sendo declarada e atribuída a uma *" String "*, no qual estamos solicitando que essa String seja transformada atráves do Método **Array.from()** que cada palavra, seja uma posição no Array.


## Conclusão

- Atráves do método **Array.from( )** podemos transformar uma *String* em um *Array*, semelhantemente ao **split( )** da aula 7.