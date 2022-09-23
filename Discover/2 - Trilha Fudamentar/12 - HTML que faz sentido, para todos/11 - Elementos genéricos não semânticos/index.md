# Elementos genéricos não semânticos

*Descrição:*  Temos dois elementos não semânticos para uso genérico, um para bloco e outro para texto, sendo esses o ``div`` e o ``span``.

Em ambas as situações nós usaremos atributos globais como id e class para entregar um maior significado.

- O ``span`` é usado quando não se acha um elemento de texto semântico, já o div, quando não se acha um elemento de bloco semântico.

*Um exemplo de uso do ``span`` é caso queira dar um destaque no texto, mas não queira usar a tag strong, algo parecido com:*

```
Usado se não conseguir achar um elemento de texto semântico.
<h1>Título <span class="destaque" >destacado </span> </h1>
```

```
Um exemplo do uso de div semântico:
Usado se não conseguir achar um elemento de bloco semântico.

<div class="cart">
    <h2>Carrinho de compras</h2>
</div>
```