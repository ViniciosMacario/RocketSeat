## O JavaScript é uma linguagem fracamente tipada e dinâmica

- Variáveis não precisam ter um tipo previamente definido;
    > Não precisamos necessariamente definir o tipo de dado, o próprio Js faz isso.
    > Você pode observar o tipo de dados atráves do "typeof";
    
    <script> console.log(typeof variável); </script>

- Podemos mudar o conteúdo da variável
    > Nas variáveis "var" e "let", podemos alterar o tipo de dado empregado ao passar do código, ou seja, ela é uma linguagem dinâmica,  enquanto com a "const" não é possível.
        ```js
        { 
            let clima = true;   
            clima = "Vinicios"  

            console.log(typeof variável); 
            // Resultado: String
        } 
        ```

    