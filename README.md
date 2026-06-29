# Viagem Tiago & Marjurie — Painel Interativo

Painel de planejamento de viagem para o casal Tiago e Marjurie (Porto Alegre/RS), período **26 de julho a 2 de agosto de 2026**.

## O que contém

- **10 destinos brasileiros** analisados (excluindo RS, SC e RJ)
- Comparativo **carro (Cobalt 2015) vs ônibus vs avião**
- Roteiros **workation** dia a dia (trabalho de dia, passeios à noite)
- Estimativas de custo em 3 faixas (econômico / equilibrado / confortável)
- Top 3 recomendados, filtros interativos e comparador lado a lado
- Seção internacional informativa (Punta del Este e Bariloche — requer passaporte)
- Orçamento total: **R$ 6.000** para o casal

## Visualizar localmente

Abra o arquivo `index.html` no navegador ou use um servidor local:

```bash
cd viagem_marjurie_tiago
python3 -m http.server 8080
```

Acesse: http://localhost:8080

## Publicar no GitHub Pages

1. Faça push do repositório para o GitHub
2. No repositório, vá em **Settings → Pages**
3. Em **Source**, selecione:
   - Branch: `main` (ou `master`)
   - Folder: `/ (root)`
4. Salve — em alguns minutos o site estará em:
   `https://<seu-usuario>.github.io/viagem_marjurie_tiago/`

### Via GitHub Actions (opcional)

Se preferir deploy automático, crie `.github/workflows/pages.yml`:

```yaml
name: Deploy GitHub Pages
on:
  push:
    branches: [main, master]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - uses: actions/deploy-pages@v4
```

## Estrutura

```
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   └── components.css
├── js/
│   └── app.js
└── README.md
```

## Fontes de preços

Pesquisa de referência: **29 de junho de 2026**

- [ClickBus](https://www.clickbus.com.br/) / FlixBus — ônibus
- [KAYAK](https://www.kayak.com.br/) / Trip.com — voos
- Booking / KAYAK — hospedagem
- Sites oficiais de turismo de cada cidade

**Importante:** valores são estimativas. Confirme preços e disponibilidade antes de reservar.

## Top 3 recomendado

1. **São Lourenço (MG)** — romântico, termas, dentro do orçamento
2. **Curitiba + Morretes (PR)** — próximo, indoor, trem histórico
3. **Poços de Caldas (MG)** — arquitetura europeia, fontes iluminadas

## Licença

Uso pessoal — Tiago & Marjurie.
