# Fluxo de Caixa Familiar

**Descriçõa:** Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

*Desafio:*

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.




Algoritmo Lógico:

- 1º Um meio de captação de Entrada de Dados.
    - 1.1º Onde eles serão armazenados.
        - 1.2º Como ele serão manipulados.
        
- 2º faça a diferença entre entrada e saida de dinheiro.
    - 2.1º Informe ao Usuário o saldo.
        - 2.2º Se for negativo
                - Informe uma mensagem ao usuário para controlar mais suas dispesas.
        - 2.3º Se for Positivo
                - Informe uma mensagem ao usuário  parabenizando. 

Minha Resolução JS:

- 1º Os dados recolhidos por meio de um ``Prompt``, no qual um pertencente a ``Receitas`` e outro a ``Despesas``.
    - 1.1º Serão armazenados em duas variáveis do tipo const.
    - 1.2º Serão transportado para um Objeto, contendo suas respectivas propriedades, os dados serão tratado em formato de Array de acordo com a condição do exercício.

- 2º Será criada uma Função responsável por pegar esse Objeto e atribuir para uma nova váriavel de escopo local.
    - 2.1º Será criada uma variável para armazenar o resultado da diferença entre os valores de Receitas e Despesas.
        - 2.2º Será verificado se o valor é Positivo ou Não.
            - 2.3º Se for Positivo, logo, maior que zero
                - 2.4º Informe uma Mesangem no console.log,     informando também o valor do resultado.
            - 2.5º Se não for Positivo, logo, Menor que zero.
                - 2.6º Informe uma Mesangem no console.log,     informando também o valor do resultado.