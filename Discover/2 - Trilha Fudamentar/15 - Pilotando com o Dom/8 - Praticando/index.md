# Desafio Modal


1º Criar uma botão com uma mensagem: "Abrir Janela" - (Estado Inícial)
    2º Quando o botão for ativado, ele deve desaparecer da dela.
3º Enquanto isso outro botão no lugar deve aparecer: com uma mensagem escrito "Aperte Esc"
    4º Quando a tecla "Esc" for ativada, ela deve retornar para o estado inicial.


Se 1º Primeiro botão for true
    Ative o segundo evento de keyboard.
        Verificar se a tecla ESC foi ativada.
            Se sim, volta e tela inicial.
            Se não, mantenha a tela.
Se não for false, mantenha a tela.