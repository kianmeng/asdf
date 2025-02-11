import{_ as a,c as o,o as r,ag as s}from"./chunks/framework.CkHWihve.js";const p=JSON.parse('{"title":"Introdução","description":"","frontmatter":{},"headers":[],"relativePath":"pt-br/guide/introduction.md","filePath":"pt-br/guide/introduction.md","lastUpdated":1643288544000}'),t={name:"pt-br/guide/introduction.md"};function n(i,e,d,c,m,u){return r(),o("div",null,e[0]||(e[0]=[s('<h1 id="introducao" tabindex="-1">Introdução <a class="header-anchor" href="#introducao" aria-label="Permalink to &quot;Introdução&quot;">​</a></h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>O <code>asdf</code> é um gerenciador de versões. Todas as definições de versão das ferramentas estão contidas no arquivo (<code>.tool-versions</code>), o qual você pode compartilhar com o seu time no repositório Git de um projeto e garantir que todos estejam usando <strong>exatamente</strong> a mesma versão das ferramentas.</p><p>A maneira antiga de trabalhar necessitava diversos gerenciadores de versão, cada um deles com uma documentação, arquivos de configuração diferentes (manipulação do <code>$PATH</code>, shims e variáveis de ambiente, por exemplo). O <code>asdf</code> provê um único arquivo de configuração e uma única interface para simplificar o fluxo de desenvolvimento, podendo ser ampliado para todas as ferramentas através de um simples plugin.</p><h2 id="funcionamento" tabindex="-1">Funcionamento <a class="header-anchor" href="#funcionamento" aria-label="Permalink to &quot;Funcionamento&quot;">​</a></h2><p>Após instalar e configurar o <code>asdf</code> no seu shell, plugins podem ser instalados para gerenciar determinadas ferramentas. Quando uma ferramenta é instalada por um plugin, os executáveis que foram instalados possuem <a href="https://en.wikipedia.org/wiki/Shim_(computing)" target="_blank" rel="noreferrer">shims</a> criados para cada um deles. Quando você roda algum destes executáveis, o shim é executado, permitindo que o <code>asdf</code> identifique qual versão da ferramenta está configurada no arquivo <code>.tool-versions</code> e execute esta versão.</p><h2 id="projetos-relacionados" tabindex="-1">Projetos relacionados <a class="header-anchor" href="#projetos-relacionados" aria-label="Permalink to &quot;Projetos relacionados&quot;">​</a></h2><h3 id="nvm-n-rbenv-etc" tabindex="-1">nvm / n / rbenv etc <a class="header-anchor" href="#nvm-n-rbenv-etc" aria-label="Permalink to &quot;nvm / n / rbenv etc&quot;">​</a></h3><p>Ferramentas como o <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a>, <a href="https://github.com/tj/n" target="_blank" rel="noreferrer">n</a> e <a href="https://github.com/rbenv/rbenv" target="_blank" rel="noreferrer">rbenv</a> são escritas em shell scripts que criam shims para os executáveis instalados para essas ferramentas.</p><p>O <code>asdf</code> é bem similar e foi criado para competir neste meio de ferramentas de gerenciamento de versão. O grande diferencial do <code>asdf</code> é que seu sistema de plugins elimina a necessidade de um gerenciador de versões para cada ferramenta, esta com diferentes comandos e arquivos de configuração.</p><h3 id="direnv" tabindex="-1">direnv <a class="header-anchor" href="#direnv" aria-label="Permalink to &quot;direnv&quot;">​</a></h3><blockquote><p>Aumenta os shells existentes com a possibilidade de utilizar diferentes variáveis de ambiente com base no diretório atual.</p></blockquote><p>O <code>asdf</code> não gerencia variáveis de ambiente, entretanto existe o plugin <a href="https://github.com/asdf-community/asdf-direnv" target="_blank" rel="noreferrer"><code>asdf-direnv</code></a> para integrar o comportamento do direnv ao asdf.</p><p>Veja a <a href="https://direnv.net/" target="_blank" rel="noreferrer">documentação do direnv</a> para mais detalhes.</p><h3 id="homebrew" tabindex="-1">Homebrew <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;Homebrew&quot;">​</a></h3><blockquote><p>O gerenciador de pacotes faltante para o macOS (ou Linux)</p></blockquote><p>O Homebrew gerencia seus pacotes e dependências destes pacotes. O <code>asdf</code> não gerencia dependencias, não é um gerenciador de pacotes, a escolha do gerenciador de pacotes é reservada ao usuário.</p><p>Veja a <a href="https://brew.sh/" target="_blank" rel="noreferrer">documentação do Homebrew</a> para mais detalhes.</p><h3 id="nixos" tabindex="-1">NixOS <a class="header-anchor" href="#nixos" aria-label="Permalink to &quot;NixOS&quot;">​</a></h3><blockquote><p>O Nix é uma ferramenta que relaciona o gerenciamento de pacotes e as configurações de sistema.</p></blockquote><p>O NixOS visa construir ambientes verdadeiramente replicáveis através da gerência das versões exatas dos pacotes e dependências de cada ferramenta, algo que o <code>asdf</code> não faz. O NixOS faz isso através da sua própria linguagem de programação, muitas ferramentas da linha de comando e uma coleção de pacotes contendo mais de 60,000 destes.</p><p>Novamente, o <code>asdf</code> não gerencia dependências/pacotes e não é um gerenciador de pacotes.</p><p>Veja a <a href="https://nixos.org/guides/how-nix-works.html" target="_blank" rel="noreferrer">documentação do NixOS</a> para mais detalhes.</p><h2 id="por-que-usar-o-asdf" tabindex="-1">Por que usar o asdf? <a class="header-anchor" href="#por-que-usar-o-asdf" aria-label="Permalink to &quot;Por que usar o asdf?&quot;">​</a></h2><p>O <code>asdf</code> garante que equipes utilizem exatamente a mesma versão de alguma ferramenta, com suporte para <strong>diversas</strong> delas através do sistema de plugins e a <em>simplicidade e familiaridade</em> de ser um único <strong>shell</strong> script que você inclui na configuração do seu shell</p><div class="tip custom-block"><p class="custom-block-title">Nota</p><p>O <code>asdf</code> não foi feito para ser o gerenciador de pacotes do seu sistema, mas sim uma ferramenta para gerenciar versões de outras ferramentas. Não é por que é possível criar um plugin para qualquer ferramenta/linguagem com o <code>asdf</code> que esta sempre será a solução mais adequada.</p></div>',26)]))}const f=a(t,[["render",n]]);export{p as __pageData,f as default};
