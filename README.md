# UC09 — Programar aplicativos computacionais com integração de banco de dados para desktop — Aluno

Material de estudo e prática da **UC09 do Curso Técnico em Desenvolvimento de Sistemas**. Ao longo da unidade você constrói um aplicativo desktop em **Python** integrado a um banco de dados, primeiro no **SQLite** e depois no **MySQL**: modela os dados, grava e consulta com segurança, liga a interface ao banco, organiza a arquitetura, documenta e entrega um executável.

O percurso tem **31 aulas e 92 horas de encontros**, em 6 fases. As aulas são publicadas aqui conforme ficam prontas; as demais aparecem como **Planejada**.

**[Acessar as aulas online](https://robsonnf.github.io/uc09-programar-aplicativos-desktop-banco-de-dados-aluno/)** · **[Abrir o índice local](index.html)** · **[Consultar o percurso do curso](CURRICULUM.md)**

## Comece por aqui

1. Abra o site das aulas, ou baixe este repositório e abra `index.html`.
2. Entre na aula indicada pelo professor e leia os objetivos e o que é preciso antes de começar.
3. Estude a teoria e rode os exemplos no seu computador, comparando com o resultado esperado.
4. Faça as atividades no seu projeto, rode os testes pedidos e registre o que observou.
5. **Baixe seus arquivos e exporte os registros da aula antes de trocar de aula, recarregar ou fechar a página.**

Dá para ler pelo celular. Para programar, use um computador com Python, Git e um editor de código.

## As fases do percurso

1. **Analisar e representar**
2. **Persistir com integridade**
3. **Integrar a interface**
4. **Consultar, importar e organizar**
5. **Consolidar arquitetura e ORM**
6. **Validar e distribuir**

Cada fase usa o que a anterior construiu. O projeto é contínuo: o repositório criado no começo da unidade recebe, aula a aula, o ambiente virtual, o pacote do aplicativo, os testes, o banco e a documentação.

## Aulas

| Aula | Fase | Tema | Acesso |
|---|---|---|---|
| A01 | 1 | Abertura, ambiente e diagnóstico | [Abrir aula](lessons/0001-abertura-e-diagnostico.html) |
| A02 | 1 | Requisitos, ética e organização do trabalho | [Abrir aula](lessons/0002-requisitos-etica-e-organizacao-do-trabalho.html) |
| A03 | 1 | Raciocínio no papel, pseudocódigo e tradução para Python | [Abrir aula](lessons/0003-raciocinio-no-papel-pseudocodigo-e-traducao-para-python.html) |
| A04 | 1 | Ambiente virtual, módulos, exceções e histórico local | [Abrir aula](lessons/0004-ambiente-virtual-modulos-excecoes-e-historico-local.html) |
| A05 | 1 | POO básica: classes, objetos e composição | [Abrir aula](lessons/0005-poo-basica-classes-objetos-e-composicao.html) |
| A06 | 2 | Modelagem relacional e SQL essencial | [Abrir aula](lessons/0006-modelagem-relacional-e-sql-essencial.html) |
| A07 | 2 | Conexão Python–banco e ciclo da conexão | [Abrir aula](lessons/0007-conexao-python-banco-e-ciclo-da-conexao.html) |
| A08 | 2 | Inserção e consulta parametrizadas | [Abrir aula](lessons/0008-insercao-e-consulta-parametrizadas.html) |
| A09 | 2 | Atualização e remoção por identificador | [Abrir aula](lessons/0009-atualizacao-e-remocao-por-identificador.html) |
| A10 | 2 | Transações, integridade e persistência | [Abrir aula](lessons/0010-transacoes-integridade-e-persistencia.html) |
| A11 | 3 | Interface desktop: janela, organização e widgets | [Abrir aula](lessons/0011-interface-desktop-janela-organizacao-e-widgets.html) |
| A12 | 3 | Eventos, callbacks e validação de entradas | [Abrir aula](lessons/0012-eventos-callbacks-e-validacao-de-entradas.html) |
| A13 | 3 | Cadastro e listagem integrados ao banco | [Abrir aula](lessons/0013-cadastro-e-listagem-integrados-ao-banco.html) |
| A14 | 3 | Edição, exclusão e sincronização da interface | [Abrir aula](lessons/0014-edicao-exclusao-e-sincronizacao-da-interface.html) |
| A15 | 3 | Sprint CRUD, testes de fluxo e devolutiva | [Abrir aula](lessons/0015-sprint-crud-testes-de-fluxo-e-devolutiva.html) |
| A16 | 4 | Filtros, ordenação e consulta vazia | [Abrir aula](lessons/0016-filtros-ordenacao-e-consulta-vazia.html) |
| A17 | 4 | JOIN, agregações e listagens estruturadas | [Abrir aula](lessons/0017-join-agregacoes-e-listagens-estruturadas.html) |
| A18 | 4 | Arquivos, caminhos, codificação e CSV | [Abrir aula](lessons/0018-arquivos-caminhos-codificacao-e-csv.html) |
| A19 | 4 | Carga massiva, inconsistências e transações em lote | [Abrir aula](lessons/0019-carga-massiva-inconsistencias-e-transacoes-em-lote.html) |
| A20 | 4 | MVC aplicado à refatoração do aplicativo | [Abrir aula](lessons/0020-mvc-aplicado-a-refatoracao-do-aplicativo.html) |
| A21 | 5 | Repository/DAO, serviços e responsabilidades | [Abrir aula](lessons/0021-repository-dao-servicos-e-responsabilidades.html) |
| A22 | 5 | Consolidação arquitetural e testes de regressão | [Abrir aula](lessons/0022-consolidacao-arquitetural-e-testes-de-regressao.html) |
| A23 | 5 | ORM: ambiente, mapeamento, sessão e transação | [Abrir aula](lessons/0023-orm-ambiente-mapeamento-sessao-e-transacao.html) |
| A24 | 5 | ORM: relacionamentos, CRUD e consultas | [Abrir aula](lessons/0024-orm-relacionamentos-crud-e-consultas.html) |
| A25 | 5 | SQL direto × ORM e decisão documentada | [Abrir aula](lessons/0025-sql-direto-orm-e-decisao-documentada.html) |
| A26 | 6 | Depuração sistemática, testes e recuperação de falhas | Planejada |
| A27 | 6 | Documentação e reprodução do ambiente | Planejada |
| A28 | 6 | Executável, recursos e banco gravável | Planejada |
| A29 | 6 | Teste cruzado no destino e distribuição | Planejada |
| A30 | 6 | Ajustes finais e preparação da defesa | Planejada |
| A31 | 6 | Defesa, entrega final, retrospectiva e manutenção | Planejada |

## Preparar o computador

Você vai precisar de:

- **Python 3.12 ou mais novo** (o `python -m sqlite3` usado nas aulas de banco exige essa versão);
- **Git**;
- um editor de código, como o VS Code.

No terminal, confira:

```powershell
python --version
git --version
python -m sqlite3 --help
```

No Windows, se o seu Python usa o lançador `py`, troque `python` por `py`. A partir da A04 o projeto ganha um ambiente virtual próprio (`.venv`), e os comandos passam a usar `.\.venv\Scripts\python.exe`.

Use sempre **dados fictícios**. Nunca coloque dados pessoais reais nos exercícios, nos testes ou no banco.

## Acessar online ou baixar

### Pelo navegador

Acesse [o site das aulas](https://robsonnf.github.io/uc09-programar-aplicativos-desktop-banco-de-dados-aluno/). Não é preciso clonar nada para estudar online.

### Baixar uma cópia

1. Nesta página do GitHub, clique em **Code → Download ZIP**.
2. Extraia o ZIP inteiro e abra `index.html` na pasta extraída.
3. Preserve as pastas `assets/`, `lessons/` e `anexos/`: elas funcionam juntas.

Com Git:

```powershell
git clone https://github.com/robsonnf/uc09-programar-aplicativos-desktop-banco-de-dados-aluno.git
cd uc09-programar-aplicativos-desktop-banco-de-dados-aluno
```

A leitura, os exemplos e os anexos funcionam offline depois do download. Links para documentação externa precisam de internet.

### Servidor local (opcional)

Com **Node.js 18 ou mais novo**, na pasta que tem o `package.json`:

```powershell
npm start
```

Se o PowerShell bloquear o `npm`, use `npm.cmd start`. Não é preciso `npm install`. Abra o endereço mostrado no terminal e use **Ctrl + C** para encerrar.

## Como cada aula está organizada

| Parte | Como usar |
|---|---|
| Objetivos e pré-requisitos | Confira o que a aula pede antes de começar. |
| Teoria | Leia e rode os exemplos curtos no seu computador. |
| Atividades | Siga o passo a passo no seu projeto e rode os testes indicados. |
| Pistas | Abra uma de cada vez, só quando precisar. |
| Auditoria e defesa | Analise código e decisões, e prepare-se para explicar o que fez. |
| Registros | Anote previsão, resultado observado e o que corrigiu. |

As pistas ajudam a investigar sem fazer o trabalho por você. Este material **não traz gabaritos**: a correção e a discussão são feitas com o professor.

## Navegação e controles

| Controle | Uso |
|---|---|
| **P** | Abre e fecha a grade das aulas (fora de um campo de texto). **Escape** fecha. |
| Lua / Sol | Alterna entre tema escuro e claro. |
| Ampliar para apresentação | Aumenta o conteúdo para projetar. |
| Versão para leitura ou impressão | Abre a aula com tudo expandido; use o imprimir do navegador para gerar PDF. |

## Rascunhos e registros

O editor da página serve para preparar a tentativa e anotar o que observou. **Ele não executa Python nem testa o seu código**: rode tudo no seu computador.

**Não há salvamento automático.** Antes de sair da aula:

1. Use **Baixar meu arquivo** nos rascunhos que quer guardar.
2. Preencha a identificação e os registros da prática.
3. Clique em **Exportar registros da aula** e confira o arquivo `.md` baixado.
4. Guarde também os arquivos do seu projeto e faça commit no seu repositório.

A página não envia nada ao professor. A entrega é feita por você, no canal combinado.

## Estrutura deste repositório

```text
index.html          índice das aulas, por fase
CURRICULUM.md       percurso e conteúdos da unidade
lessons/            aulas interativas e versões leitura-*.html
anexos/             arquivos usados nas atividades
assets/             estilos e interações das páginas
scripts/servir.mjs  servidor local opcional
package.json        comando npm start
README.md           este guia
LEIA-ME.txt         cópia deste guia em texto
```

Você não precisa alterar nada aqui para fazer os exercícios: trabalhe no seu próprio repositório de projeto.

## Problemas frequentes

| Situação | O que conferir |
|---|---|
| A página abriu sem estilo | Extraia o ZIP inteiro e abra `index.html` na pasta extraída. |
| `python` não foi encontrado | Confira a instalação; no Windows, teste `py --version`. |
| `No module named sqlite3.__main__` | Seu Python é anterior ao 3.12. Atualize ou use o Python do laboratório. |
| O import não encontra o pacote do projeto | Rode o comando a partir da raiz do projeto, com o `.venv` ativo. |
| A aula online parece antiga | Atualize com Ctrl + F5. |

Ao pedir ajuda, diga a aula, o arquivo, o comando que rodou, a mensagem de erro e o que esperava ver.

## Antes de concluir uma aula

- [ ] Consigo explicar o problema e os conceitos usados.
- [ ] Rodei os testes e comparei a previsão com o resultado.
- [ ] Testei os casos de erro, não só o caminho feliz.
- [ ] Fiz commit do que construí no meu repositório.
- [ ] Exportei os registros e entreguei pelo canal combinado.
