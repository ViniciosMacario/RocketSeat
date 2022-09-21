## Outra maneira de entender funções

> Uma função é um liquidificador(Analogia)

```js
    //Temos uma função responsável por fazer Suco, onde passamos para ela duas frutas(parâmetros) e ela vai retorna para nós o suco pronto, mas antes disso, precisamos informar as frutas(argumentos) para que ela possa fazer o suco, escolhemos 'banana' e 'maçã', quando a função receber essas frutas(argumentos), ela vai fazer o suco e devolver para nós, então precisamos de um lugar para armazenar o suco, guarda-lo para consumimos ele, podemos usar um copo e vamos ver o que tem dentro do copo usando o console.log().
    function fazerSuco(fruta1, fruta2){
        return 'suco de:' + fruta1 + fruta2;
    }
    

    const copo = fazerSuco('banana', 'maçã')
    console.log(copo)
```
