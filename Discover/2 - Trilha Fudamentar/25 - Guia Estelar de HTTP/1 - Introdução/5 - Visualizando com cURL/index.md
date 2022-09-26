

Por mais que já possamos visualizar algumas informações com o ``DevTools``, precisamos de alguns detalhes a mais para trabalhar, então usaremos uma ferramenta extra chamada ``cURL``, que já vem instalada em sistemas baseados em UNIX, e no Windows nós aconselhamos a usar a ferramenta ``Git Bash``, que também vem com ela.

Usando o cURL podemos entender alguns conceitos, primeiramente temos que saber que o cURL está fazendo o papel do cliente, ao invés do navegador, com a ferramenta, também conseguimos ver o corpo da resposta, o que não era possível com o DevTools, e para também pegar os headers com o cURL, podemos adicionar ``-i`` ao comando antes do link, com o parâmetro ``-v`` podemos ver todos os headers, tanto os de saída quanto de chegada.