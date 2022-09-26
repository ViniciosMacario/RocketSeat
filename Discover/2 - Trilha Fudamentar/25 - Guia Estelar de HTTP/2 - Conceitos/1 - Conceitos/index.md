# Conceitos de HTTP

**Descrição:** Nessa aula vamos esclarecer alguns conceitos relacionados ao HTTP, que foi feito pra ser um protocolo simples e fácil de entender pra qualquer pessoa.

- Ele foi baseado na ``estrutura de cliente/servidor``, ou seja, sempre vão ter uma requisição e uma resposta acontecendo.

*Exemplo:*

> Você pode pensar na forma de comprar um lanche, você faz um ``pedido``, especificando a comida que você quer, e o estabelecimento te "``responde``" com a comida.

- O HTTP foi criado para também ser ``stateless``, traduzindo, não guardar estado, ou seja, ele não vai guardar nenhuma informação, e não existe nenhuma relação entre as conexões.
    - ``Sessões``, imagina entramos em uma página, escrevermos nessa página o nosso login e senha para acessar um site, só que daí você dá um Reload na page e perde tudo aquilo que você escreveu, por que? você não está guardando o estado, lembre-se. Podemos fazer uso de sessões no Browser para resolver isso, podemos guardar as informações de que vc está logado por;
        - ``Cookies``
        - ``Storages``

- Outra característica do protocolo é ser ``extensível``, podendo fazer diversas trocas de informação entre o cliente e o servidor, conforme a necessidade.
    - Headers, informações para comunicação
    - Body, Corpo do pedido ou da resposta