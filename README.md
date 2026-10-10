# MALEMI Tech & Data — Site Institucional Estático

> Site institucional estático oficial da **MALEMI**, especializada em tecnologia, Business Intelligence, automação de processos e soluções corporativas de Inteligência Artificial.

---

## 📌 Visão Geral

O site institucional da **MALEMI** foi reconstruído sob uma arquitetura puramente estática, de alta performance e sem qualquer dependência de backend, servidores de aplicação ou banco de dados.

Com estética refinada *Dark Luxury Tech*, o portal combina tons escuros profundos (`#05070B`), acentos esmeralda (`#09CCA2`), azul tecnológico (`#1D4ED8`), animação interativa de nós e fluxos de dados em HTML5 Canvas, e tipografia moderna.

---

## ✨ Estrutura e Seções

1. **Header & Navegação Superior**:
   - Logotipo oficial da marca MALEMI (*Tech & Data*).
   - Menu desktop com efeito de destaque e rolagem suave para as seções.
   - Menu responsivo com botão hambúrguer para smartphones e tablets.
   - Botão de ação direta (*Fale conosco*).
   - Efeito de vidro dinâmico (*backdrop-blur*) ao rolar a página.

2. **Hero Section (Apresentação Principal)**:
   - Headline: *"A tecnologia certa, te levará a novas oportunidades!"*
   - Proposta de valor clara da MALEMI.
   - Canvas animado interativo em Vanilla JS (*TechNetworkCanvas*) com rede de nós e pulsos de dados em tempo real.
   - Chamadas de ação (*Conheça nossas soluções* e *Fale com a MALEMI*).
   - Barra de destaques de tecnologia (Sites de Alto Impacto, BI Executivo, Automação & IA).

3. **Sobre a MALEMI (`#sobre`)**:
   - Missão institucional e posicionamento de mercado.
   - Pilares centrais: *Objetividade Comercial*, *Arquitetura Integrada* e *Confiança & Segurança*.

4. **Nossos Produtos e Soluções (`#solucoes`)**:
   - Abas interativas para alternar entre os 3 produtos:
     - **MALEMI Sites**: Presença Digital de Alta Performance.
     - **MALEMI BI**: Inteligência Estratégica & Análise de Dados.
     - **MALEMI Automação & IA**: Eficiência Operacional & Agentes Inteligentes.
   - Visão detalhada de cada produto com problemas que resolve e recursos-chave.
   - Exibição dinâmica dos 3 planos estruturados (**Essencial**, **Profissional** e **Premium**).
   - Botão de solicitação de proposta que pré-seleciona a solução no formulário de contato.

5. **Como Trabalhamos (`#metodologia`)**:
   - Metodologia em 4 etapas transparentes:
     1. *01. Diagnóstico & Imersão*
     2. *02. Estratégia & Arquitetura*
     3. *03. Desenvolvimento Ágil*
     4. *04. Implantação & Suporte*

6. **Diferenciais Competitivos (`#diferenciais`)**:
   - Engenharia Sob Medida.
   - Pragmatismo & Foco em Resultado.
   - Integração & Solidez de Ponta a Ponta.
   - Comunicação Clara e Transparente.

7. **Contato e Conversão (`#contato`)**:
   - Canais diretos de atendimento com botão de copiar e-mail com 1 clique (`contato@malemi.com.br`).
   - Formulário institucional estático pronto para:
     - Integração nativa com **Netlify Forms** (`data-netlify="true"`).
     - Fallback direto para abertura de cliente de e-mail (`mailto:`) pré-formatado com os dados do lead.

8. **Rodapé Institucional**:
   - Links rápidos para soluções e páginas institucionais.
   - Indicador pulsante de status de infraestrutura ativa.
   - Modais institucionais de *Termos de Uso* e *Privacidade & Proteção de Dados (LGPD)*.

---

## 🛠️ Stack Tecnológica

- **Estrutura**: HTML5 Semântico (acessibilidade WCAG 2.1, navegação por teclado).
- **Estilização**: Tailwind CSS + CSS3 Vanilla (`css/style.css`).
- **Interações**: JavaScript Puro (Vanilla JS - `js/main.js`).
- **Canvas Visual**: HTML5 Canvas API com renderização matemática e otimização por `requestAnimationFrame`.
- **Hospedagem & Deploy**: 100% estático, compatível com Netlify, GitHub Pages, Vercel ou qualquer servidor web estático.

---

## 🚀 Como Executar Localmente

Como o projeto é totalmente estático, **não há necessidade de instalar pacotes nem executar comandos de build**.

### Opção 1: Abrir diretamente no navegador
Dê um duplo clique no arquivo `index.html` ou abra-o em qualquer navegador web (Google Chrome, Microsoft Edge, Firefox, Safari).

### Opção 2: Utilizando uma extensão Live Server (VS Code / Cursor / IDE)
Clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.

### Opção 3: Servidor HTTP simples (Terminal)
Com Python:
```bash
python -m http.server 3000
```
Ou com Node.js (npx):
```bash
npx serve .
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🌐 Publicação no Netlify

O repositório já está configurado com o arquivo `netlify.toml`:

```toml
[build]
  publish = "."
```

### Passo a passo para publicação:
1. Conecte o repositório Git no [Netlify](https://www.netlify.com/).
2. O Netlify detectará automaticamente o arquivo `netlify.toml`.
3. Não é necessário preencher comando de build (*Build command*: em branco).
4. O diretório de publicação é a própria raiz (`.` ou vazio).
5. O deploy é instantâneo e o formulário de contato é capturado automaticamente pelo painel do Netlify Forms.

---

## 📁 Estrutura de Arquivos

```text
├── css/
│   └── style.css          # Estilos customizados Dark Luxury, gradientes e modais
├── js/
│   └── main.js            # Interações, Canvas de dados, abas de soluções e formulário
├── .doc/                  # Documentação e especificações originais da marca
├── favicon.ico            # Favicon oficial da MALEMI
├── index.html             # Estrutura HTML5 principal estática
├── netlify.toml           # Configuração de publicação estática para o Netlify
├── robots.txt             # Diretrizes de rastreamento para motores de busca (SEO)
├── sitemap.xml            # Mapa do site em XML para indexação
└── README.md              # Documentação oficial do projeto
```

---

## 📄 Licença

Este projeto é de propriedade da **MALEMI**. Todos os direitos reservados.
