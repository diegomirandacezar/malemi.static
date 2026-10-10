# MALEMI Static

**MALEMI Tech & Data | Engenharia Digital, BI & Inteligência Artificial**

Site institucional estático da Malemi, desenvolvido para apresentar a empresa, seus serviços e suas soluções em tecnologia, dados, automação e inteligência artificial.

## Sobre o projeto

O Malemi Static é a versão estática do site institucional da Malemi. O objetivo é manter a identidade visual, o posicionamento e a experiência de navegação do projeto original, utilizando uma arquitetura simples, leve e de fácil manutenção.

A aplicação não depende de backend próprio ou banco de dados para exibir suas páginas.

## Objetivos

* Preservar a identidade visual da Malemi.
* Apresentar os serviços e as soluções oferecidas.
* Garantir uma experiência responsiva em computadores, tablets e celulares.
* Facilitar a manutenção e a evolução do site.
* Permitir publicação simplificada no Netlify.
* Manter a estrutura preparada para futuras integrações.

## Tecnologias

* **HTML5:** estrutura e conteúdo das páginas.
* **CSS3:** estilos personalizados.
* **Tailwind CSS:** estilização e layout responsivo.
* **JavaScript:** interações e comportamentos da interface.
* **Netlify:** hospedagem e publicação do site estático.
* **Git e GitHub:** versionamento e gerenciamento do código-fonte.

## Estrutura do projeto

A estrutura prevista é:

```text
malemi-static/
├── index.html
├── css/
│   ├── input.css
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── package.json
├── netlify.toml
└── README.md
```

A estrutura poderá ser adaptada conforme a implementação real. Os arquivos e diretórios devem existir apenas quando forem utilizados pelo projeto.

## Executar localmente

### Pré-requisitos

* Git, caso o projeto seja clonado do GitHub.
* Node.js e npm para instalar as dependências de desenvolvimento e compilar o Tailwind CSS.
* Um navegador atualizado.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/diegomirandacezar/Malemi-static.git
cd Malemi-static
```

Instale as dependências:

```bash
npm install
```

Os comandos de execução dependem dos scripts definidos no `package.json`. Caso estejam configurados, utilize:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

**Observação:** os comandos acima pressupõem que os scripts `dev` e `build` estejam configurados no projeto. Ajuste-os conforme a implementação real.

## Design e responsividade

O projeto deve preservar a identidade visual da Malemi, incluindo:

* Paleta de cores e tipografia.
* Logotipo e elementos gráficos.
* Hierarquia de títulos e textos.
* Espaçamentos, bordas, sombras e gradientes.
* Componentes e chamadas para ação.
* Navegação e interações.
* Comportamento responsivo.

A interface deve funcionar adequadamente em desktop, notebook, tablet e smartphone.

## Publicação no Netlify

O projeto pode ser publicado no Netlify por meio da conexão com o repositório GitHub ou pelo envio dos arquivos gerados.

Configuração típica para um projeto com Tailwind CSS compilado:

* **Build command:** `npm run build`
* **Publish directory:** diretório configurado para conter os arquivos finais do site.

Se o CSS compilado e o HTML estiverem diretamente na raiz, a publicação poderá utilizar a raiz como diretório de saída. Se houver uma pasta específica de produção, configure-a conforme o processo de build.

Consulte a documentação oficial: https://docs.netlify.com/

## Escopo atual

O Malemi Static é destinado à apresentação institucional da empresa.

Não fazem parte do escopo atual:

* API própria.
* Banco de dados.
* Autenticação de usuários.
* Painel administrativo.
* Cadastro e gerenciamento de clientes.
* Gerenciamento de contratos e serviços.
* Armazenamento privado de documentos PDF.

Essas funcionalidades poderão ser desenvolvidas futuramente em um sistema separado, integrado ao site quando necessário.

## Boas práticas

* Manter o código organizado e legível.
* Evitar dependências desnecessárias.
* Otimizar imagens e recursos estáticos.
* Não publicar credenciais ou informações confidenciais.
* Testar a responsividade antes de publicar alterações.
* Preservar os recursos originais da marca.
* Validar links, botões e formulários antes de cada publicação.

## Próximas evoluções

Possíveis melhorias futuras:

* Otimização de SEO.
* Melhorias de acessibilidade.
* Otimização de desempenho.
* Integração com ferramentas de análise.
* Integração com canais de contato.
* Desenvolvimento de uma API e de um painel administrativo independentes.

## Repositório

Projeto original: https://github.com/diegomirandacezar/Malemi

## Licença

Definir a licença de distribuição conforme os direitos sobre o código, a marca e os recursos utilizados no projeto.

---

**MALEMI Tech & Data**
Engenharia Digital, Business Intelligence, Automação e Inteligência Artificial.
