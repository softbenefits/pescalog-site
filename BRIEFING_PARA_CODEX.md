# Briefing para Codex - Consolidação Visual PescaLog

## Objetivo

Consolidar o protótipo visual existente em `D:\DEV\PescaLog\work\ui-prototype` como referência coerente para implementação futura.

Não criar uma nova direção visual. Este protótipo já representa a versão consolidada.

## Ficheiros fonte

Usar como fonte principal:

- `index.html`
- `styles.css`
- `app.js`
- `BRAND_GUIDE.md`
- `assets/pescalog-emblema-livro-ondas.svg`
- `assets/hero-pescador.png`

## Identidade visual aprovada

A caracterização completa da marca está em `BRAND_GUIDE.md`. Esse ficheiro prevalece em caso de dúvida sobre logo, tamanhos, aplicações Light/Dark e Desktop/Mobile.

Marca: `pescaLog`

Regras do wordmark:

- texto exato: `pescaLog`;
- `pesca` em azul-marinho `#071F2B`;
- `Log` em dourado `#D9B35D`;
- `L` sempre maiúsculo;
- tipografia sans-serif moderna, geométrica e legível;
- evitar aparência clássica, serifada ou ornamental;
- garantir leitura em tamanhos pequenos.

Emblema:

- livro aberto com ondas dentro de um círculo;
- comunica diário pessoal, mar, memória e jornadas;
- não representa peixe, anzol, polvo, lula ou outra captura específica;
- não representa lua, planeta, órbita ou astronomia;
- deve continuar legível entre 32 px e 48 px.

Paleta:

- azul-marinho: `#071F2B`;
- verde-mar: `#1F8A85`;
- dourado: `#D9B35D`;
- papel: `#FFFDF9`.

## Aplicações da marca

Desktop Light:

- emblema + wordmark;
- fundo claro;
- `pesca` azul-marinho;
- `Log` dourado.

Desktop Dark:

- emblema + wordmark;
- fundo escuro azul-marinho;
- wordmark em branco/azul muito claro com `Log` dourado;
- emblema com base clara quando necessário para contraste.

Móvel Light:

- apenas emblema;
- sem wordmark;
- fundo claro ou transparente.

Móvel Dark:

- apenas emblema;
- sem wordmark;
- base clara quando necessário para manter leitura.

## Direção da página pública e hero

A hero deve comunicar pesca real, mar, jornada e memória pessoal.

Manter a imagem contextual de pescador no mar, desde que continue coerente com:

- diário de pesca;
- pescador;
- mar/costa;
- jornada;
- memória pessoal.

Não usar lua como elemento decorativo dominante. A fase da lua aparece apenas como dado funcional da Jornada, Dashboard, Histórico ou Detalhe.

Copy recomendada para a hero:

- H1: `Cada jornada conta uma história.`
- Lead: `Regista o dia, guarda as capturas e descobre os padrões que tornam a tua pesca verdadeiramente tua.`
- CTA principal: `Entrar no PescaLog`
- CTA secundário: `Ver como funciona`

## Coerência funcional obrigatória

Tipos de pesca demonstrativos:

- `Choco e lula`
- `Polvo`
- `Diversos`

Não introduzir outros tipos demonstrativos sem validação do Nuno.

Nova Jornada:

- Data;
- Local;
- Tipo de pesca;
- Fase da Lua sugerida e editável;
- Peso Total;
- Observações Gerais opcionais;
- zero ou mais Capturas.

Captura:

- Espécie;
- Quantidade;
- Peso opcional;
- Medida opcional;
- Observações opcionais.

Não introduzir:

- rascunhos;
- planeamento de jornadas;
- autosave;
- material;
- gestão de barco;
- custos;
- combustível;
- app mobile/MAUI.

## Dashboard

Priorizar consulta rápida:

- Total de Jornadas;
- Peso Total;
- Espécie mais capturada;
- Melhor Fase da Lua;
- Últimas Jornadas;
- ação `Nova Jornada`.

Evitar dashboards demasiado densos ou gráficos decorativos.

## Critérios de aceitação

- todos os logos usam o emblema livro + ondas;
- wordmark aparece sempre como `pescaLog`;
- as capturas visuais, quando existirem, são sempre regeneradas a partir desta versão consolidada;
- não existe foco visual em astronomia;
- hero mantém contexto real de pesca;
- tipos de pesca demonstrativos estão alinhados com o domínio;
- PT-PT consistente;
- nenhum texto auxiliar fica ilegível;
- `Docs/06 - Mockups.md` e `Docs/CHANGELOG.md` refletem a consolidação visual.


