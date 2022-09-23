# Header

**Descrição:** Vamos falar um pouco mais desse elemento estrutural e semântico que é o header. 

*Observação:* não confunda o header com o head, são parecidos apenas na escrita, mas um possui 'er' no final, então fique atento.

- 1ª Quando no início de uma página, é visto como um header global.

*Veja:*

```html
    <body>
        <header></header> Header Global, ou seja, pertence a página toda.
    </body>
```

- 2º O ``<header>`` também pode ser usado em outros elementos semânticos como article, section, entre outros.

*Veja:*

```html
    <body>
        <section>
            <header>
            </header> Dentro do section, podemos usar o header e quando usamos o header dentro de uma section/article...então ele é o header da section.
        </section>
    </body>
```


- 3º Não use um ``header`` dentro de um ``header``, nem dentro de um footer, isso quebra a semântica, a ideia do header.

*Veja:*

```html
    <body>
        <header>
            <header></header>
        </header>

        <footer>
            <header></header>
        </footer>
    </body>
```

- 4º Você também pode usar múltiplos ``<header>``.

*Veja:*

```html
    <body>
        <header></header> // Um glboal

        <section>
            <header></header> // Um pertencente a section(local)
        </section>
    </body>
```


> O header também vai ocupar toda a linha na qual for aplicado(css)