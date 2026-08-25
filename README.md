# ArchBook Hub - Guia de Notebooks para Arquitetura

Este é um site estático simples, desenvolvido em HTML, CSS (Tailwind) e JavaScript (Vanilla).

## Como rodar localmente (Fedora Linux / Qualquer sistema)

1. Você não precisa de Node.js, npm, ou frameworks complexos.
2. Como você já tem o Python instalado no seu Fedora, abra o terminal nesta pasta e rode:
   ```bash
   python -m http.server 8000
   ```
3. Acesse `http://localhost:8000` no seu navegador.

## Como editar os Notebooks

Todo o banco de dados (os modelos, especificações, preços, prós e contras) está no arquivo `dados.js`.
Como você já desenvolve em Python/C, a sintaxe de objetos do JavaScript vai ser muito natural para você.
Basta adicionar, remover ou modificar os objetos na lista `notebooks` e atualizar a página. O layout HTML é dinâmico e vai se adaptar automaticamente.

## Como colocar no ar para sua namorada ver

Como você usa o **Git e GitHub (@Tarcisiomask)**:
1. Crie um repositório público no seu GitHub (ex: `arch-laptops`).
2. Faça o commit e push destes três arquivos (`index.html`, `dados.js`, `README.md`) para lá.
3. Vá em **Settings** > **Pages**.
4. Em "Build and deployment", selecione a branch `main` e a pasta `/(root)`.
5. Em poucos minutos, o link `https://tarcisiomask.github.io/arch-laptops` estará ativo e você pode mandar para ela pelo WhatsApp!
