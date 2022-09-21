O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.


# Scope

* Escopo determina a visibilidade de alguma variável no Js

# Block Statement(Declaração de bloco)

```js
//Vamos abrir o bloco
{
    //Aqui dentro é um bloco e posso colocar qualquer código
}
//Aqui fechamos o bloco.    
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`.


## var
```js
/* var é global/local e poderá funcionar também fora de um escopo de bloco
    > Global é tudo que está  dentro da tag <script></script>, ou seja, vamos imaginar que existe duas chavês envolvendo todo o código.
    > Local é quando existe somente dentro de um Scope{}.

    Vamos imaginar as duas situações do seguinte modo : Global{ local { } },  
*/

    console.log('Existe x antes do bloco?', x)
{
    var x = true/
}


```