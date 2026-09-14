# Table-Test

Estudo de frontend com cadastro, edição, exclusão e listagem de registros. A implementação do CRUD está em JavaScript, manipula uma tabela HTML e guarda dados no `localStorage` do navegador.

> **Status:** exercício de aprendizado. Existe uma estrutura Create React App, mas `src/App.js` contém apenas um componente vazio. A tabela e seus eventos estão em `public/index.html` e `public/table.js`, fora dos componentes React.

## Recursos presentes

- Inclusão de registros com identificador incremental.
- Edição e exclusão com confirmação na interface.
- Listagem ordenada por nome.
- Persistência e recuperação de dados no `localStorage`.

A função `search` registra o filtro, mas a renderização atual não o aplica. Por isso, busca funcional não faz parte dos recursos desta versão.

## Stack e estrutura

JavaScript · HTML · CSS · React / Create React App (estrutura de projeto)

```text
react/public/index.html   formulário, tabela e carregamento do script
react/public/table.js     CRUD, renderização e localStorage
react/src/App.js          componente React inicial
react/src/App.test.js     teste padrão do Create React App
react/package.json       dependências e scripts npm
```

## Visualizar o exercício

Para servir diretamente o HTML e o script do CRUD, com Python 3 instalado:

```sh
git clone https://github.com/giulia05tomaz/Table-Test.git
cd Table-Test/react
python -m http.server 8000 --bind 127.0.0.1
```

Abra `http://127.0.0.1:8000/public/index.html`. Esta opção serve os arquivos estáticos, incluindo os estilos de `src/App.css`, e não compila os assets do Create React App.

Para explorar a estrutura React, em outro terminal:

```sh
cd Table-Test/react
npm ci
npm start
```

As dependências são antigas e podem exigir ajustes de compatibilidade com versões atuais do Node.js. Os comandos acima não representam uma validação recente do build.

## Testes e limites

`npm test`, executado em `react/`, roda a configuração de testes do Create React App. O teste existente procura um link "learn react" ausente no componente atual e não cobre o CRUD; ele precisa ser atualizado e não deve ser apresentado como evidência de cobertura funcional.

O workflow existente está em `react/.github/WorkFlows/build.yml`, fora de `.github/workflows/` na raiz, portanto não configura CI do GitHub Actions para este repositório.

Use somente dados fictícios. O `localStorage` não é um banco compartilhado, não oferece autenticação e não deve guardar dados pessoais. A renderização usa HTML dinâmico sem uma camada de sanitização; este exercício não é adequado para produção.

## Próximos passos

Migrar o CRUD para componentes React, implementar o filtro, melhorar validação e renderização segura e criar testes de comportamento. Essas melhorias ainda não estão implementadas.
