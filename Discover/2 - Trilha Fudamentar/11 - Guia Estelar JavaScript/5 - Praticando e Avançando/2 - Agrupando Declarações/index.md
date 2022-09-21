## Agrupando declarações

> É possível agrupar diversas declarações de variáveis em JavaScript usando let, const ou var e colocando uma vírgula entre os nomes das variáveis a serem criadas, por exemplo: let name, age, isStudent. Para mostrar mais de uma variável no console.log também é possível usando vírgula, por exemplo: console.log(name, age, isStudent).

```js
    
    let name
    name = "Iasmin";

    //Agrupamento de Declarações
    let age, isHuman

    age = 21;
    isHuman = true;
    
    //Chamamos de argumentos os itens que passamos para a função log()
    console.log(name, age, isHuman)
```