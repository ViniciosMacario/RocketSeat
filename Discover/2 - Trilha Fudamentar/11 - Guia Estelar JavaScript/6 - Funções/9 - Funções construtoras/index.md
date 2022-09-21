## Funções Construtoras

> Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula(não é obrigatório). Para construir objetos, funções construtoras precisam ser instanciadas pela expressão 'new'. O 'this' dentro delas se referencia ao objeto criado a partir delas.

```js
	/* Primeira Parte */
	
		function Pessoa(){};
		const primeiraPessoa = new Pessoa(); 

		//1º - function Pessoa(){} - O nome da função construtora normalmente começa com a letra Maiúscula(boa prática), pois o próprio JavaScript segue esse padrão.
		//2º - const primeiraPessoa = new Pessoa() - Para construir um novo objeto, funções construtoras precisam ser instânciadas pela expressão 'new' seguido do nome da função, a função retornará um "objeto" do tipo Pessoa para a variável(const).
		//3º Todas as vezes que nós usamos o new Pessoa() , é feita uma chamada ao construtor da função Pessoa. O JavaScript por sua vez cria um objeto e define o this para aquele determinado objeto recém criado.
	
	/* Primeira Parte */


	/* Segunda parte */

		function Pessoa(){ this };
		const primeiraPessoa = new Pessoa();
		console.log(primeiraPessoa);

		//1º - function Pessoa(){ this } - A keyword 'this' dentro da função está fazendo referência ao Objeto vinculado, em outras palavras, o 'this' faz referência ao objeto que está chamando a função no momento, nesse caso o: 'const primeiraPessoa'.
		//2º - console.log(primeiraPessoa); - retornará um objeto vázio.

	/* Segunda parte */


	/* Terceira Parte */

		function Pessoa(nome, sobrenome){
			this.nome = nome;
			this.sobrenome = sobrenome;
		};

		const primeiraPessoa = new Pessoa('Vinicios', 'Macario'); 
		console.log(primeiraPessoa); 

		//1º - this.name - '.nome' é uma propriedade do objeto 'primeiraPessoa' responsável por receber o 'nome' que será passado como parâmetro da função -> a lógica é a mesma para '.sobrenome'.
		//2º - console.log(primeiraPessoa) - retornará um objeto 'Persona' contendo as propriedades '.nome', '.sobrenome' e seu valor 'Vinicios', 'Macario';


	/* Terceira Parte */


	/* Outra forma de escrever */

		function Pessoa(nome, sobrenome){
			this.nome = nome;
			this.sobrenome = sobrenome;
		};

		const primeiraPessoa = new Pessoa('Vinicios', 'Macario'); 
		console.log(primeiraPessoa); 


	/* Outra forma de escrever */
	
	Outras funções construtoras

	Por que é uma boa prática colocar o nome da função construtora em Maiúsculo?

	O JavaScript possui na sua composição muitas funções construtoras e por padrão, todas elas começam com a letra Maiúscula, por exemplo:

	let name = new String('Vinicios');
	console.log(name)
	vai retornar para nós que possuimos um objeto do tipo string e a cadéia de caracteres(quantidade de letras e suas posições);

	let number = new Number();
	console.log(name)


	let date = new Date('2020-12-01');
	console.log(date)

```
