# O Sem Nome - Instruções de Configuração

## Estrutura do Projeto

```
o-sem-nome/
├── index.html              # Página principal
├── manifest.json           # Configuração PWA
├── netlify.toml           # Configuração Netlify
├── css/
│   └── styles.css         # Estilos do site
├── js/
│   └── main.js            # JavaScript principal
├── data/
│   └── config.js          # Dados do restaurante (EDITAR AQUI)
└── assets/
    └── images/
        ├── restaurante/   # Fotos do restaurante
        │   ├── logo.png
        │   ├── logo-white.png
        │   ├── hero-bg.jpg
        │   ├── interior.jpg
        │   ├── sala-1.jpg
        │   ├── esplanada.jpg
        │   ├── entrada.jpg
        │   ├── detalhe.jpg
        │   ├── og-image.jpg
        │   ├── favicon-32x32.png
        │   ├── favicon-16x16.png
        │   └── apple-touch-icon.png
        ├── comidas/       # Fotos dos pratos
        │   ├── bacalhau.jpg
        │   ├── posta-mirandesa.jpg
        │   ├── polvo.jpg
        │   ├── sobremesa.jpg
        │   └── placeholder.jpg
        └── icons/         # Ícones para PWA
```

---

## 1. Como Carregar o Logo

### Formatos necessários:
1. **logo.png** - Logo principal (fundo transparente, ~200px largura)
2. **logo-white.png** - Logo versão branca para o footer (fundo transparente)
3. **favicon-32x32.png** - Favicon 32x32px
4. **favicon-16x16.png** - Favicon 16x16px
5. **apple-touch-icon.png** - Ícone Apple 180x180px
6. **og-image.jpg** - Imagem para redes sociais 1200x630px

### Passos:
1. Abra a pasta `assets/images/restaurante/`
2. Substitua os ficheiros existentes pelos seus logos
3. Mantenha os mesmos nomes de ficheiro

### Ferramentas úteis:
- [Favicon Generator](https://realfavicongenerator.net/) - Gera todos os tamanhos de favicon
- [Canva](https://canva.com) - Para criar og-image

---

## 2. Como Carregar Imagens

### Pasta: `assets/images/restaurante/`
Coloque aqui as fotos do restaurante:

| Ficheiro | Descrição | Tamanho Recomendado |
|----------|-----------|---------------------|
| hero-bg.jpg | Imagem de fundo principal | 1920x1080px |
| interior.jpg | Interior do restaurante | 800x600px |
| sala-1.jpg | Sala principal | 600x600px |
| esplanada.jpg | Esplanada | 600x600px |
| entrada.jpg | Entrada/Fachada | 600x600px |
| detalhe.jpg | Detalhe decorativo | 600x600px |

### Pasta: `assets/images/comidas/`
Coloque aqui as fotos dos pratos:

| Ficheiro | Descrição |
|----------|-----------|
| bacalhau.jpg | Prato de bacalhau |
| bacalhau-lagareiro.jpg | Bacalhau à Lagareiro |
| posta-mirandesa.jpg | Posta Mirandesa |
| polvo.jpg | Polvo |
| maminha.jpg | Maminha |
| robalo.jpg | Robalo |
| dourada.jpg | Dourada |
| secretos.jpg | Secretos |
| pudim.jpg | Pudim |
| leite-creme.jpg | Leite-creme |
| mousse.jpg | Mousse |
| tarte.jpg | Tarte |
| placeholder.jpg | Imagem padrão (quando não há foto) |

### Dicas para fotos:
- Use formato JPG para fotos (menor tamanho)
- Use formato PNG para logos (transparência)
- Comprima as imagens com [TinyPNG](https://tinypng.com/)
- Tamanho ideal: 600x600px para galeria

---

## 3. Como Editar os Dados do Restaurante

Abra o ficheiro `data/config.js` e edite as seguintes secções:

### Contactos
```javascript
contactos: {
    telefone: "+351 213 011 958",
    telemovel: "+351 964 121 279",
    email: "geral@osemnome.pt" // Atualizar
}
```

### Redes Sociais
```javascript
redesSociais: {
    facebook: "https://facebook.com/osemnome", // Atualizar
    instagram: "https://instagram.com/osemnome", // Atualizar
    tripadvisor: "https://tripadvisor.com/osemnome", // Atualizar
    google: "https://g.page/osemnome" // Atualizar
}
```

### Testemunhos
```javascript
testemunhos: [
    {
        nome: "Nome do Cliente",
        texto: "Texto do testemunho...",
        estrelas: 5,
        data: "Janeiro 2024"
    },
    // Adicionar mais testemunhos...
]
```

---

## 4. Como Configurar o Menu Automático (Google Sheets + Make)

### Passo 1: Criar Google Sheet

1. Aceda a [Google Sheets](https://sheets.google.com)
2. Crie uma nova folha com estas colunas:

| Categoria | Nome | Descrição | Preço | ImagemURL |
|-----------|------|-----------|-------|-----------|
| peixes | Bacalhau à Brás | Tradicional bacalhau... | 16.50€ | https://... |
| carnes | Posta Mirandesa | Autêntica posta... | 28.00€ | https://... |
| sobremesas | Pudim | O famoso pudim... | 5.50€ | https://... |

3. Anote o ID da Sheet (na URL: `docs.google.com/spreadsheets/d/[ID_AQUI]/edit`)

### Passo 2: Criar Cenário no Make

1. Aceda a [Make.com](https://make.com) (conta gratuita disponível)
2. Crie um novo Scenario
3. Adicione os módulos:

```
[Webhooks: Custom webhook] → [Google Sheets: Search Rows] → [Tools: Set variable] → [Webhooks: Webhook response]
```

#### Configuração do Webhook:
- Copie o URL gerado

#### Configuração do Google Sheets:
- Conecte a sua conta Google
- Selecione a spreadsheet
- Defina os critérios de pesquisa

#### Configuração da Resposta:
```json
{
    "peixes": [/* array de items */],
    "carnes": [/* array de items */],
    "sobremesas": [/* array de items */]
}
```

### Passo 3: Atualizar o Site

Abra `data/config.js` e atualize:
```javascript
webhooks: {
    menuGoogleSheets: "https://hook.eu1.make.com/SEU_WEBHOOK_AQUI",
    // ...
}
```

---

## 5. Como Configurar as Reservas (Make + Google Sheets)

### Passo 1: Criar Google Sheet para Reservas

Colunas necessárias:
| Nome | Email | Telefone | Data | Hora | Pessoas | Observações | Timestamp | Status |
|------|-------|----------|------|------|---------|-------------|-----------|--------|

### Passo 2: Criar Cenário no Make

```
[Webhooks: Custom webhook] → [Google Sheets: Add a Row] → [Email: Send an Email] → [Webhooks: Webhook response]
```

#### Mapeamento de Campos:
- Nome → {{1.name}}
- Email → {{1.email}}
- Telefone → {{1.phone}}
- Data → {{1.date}}
- Hora → {{1.time}}
- Pessoas → {{1.guests}}
- Observações → {{1.message}}
- Timestamp → {{1.timestamp}}
- Status → "Pendente"

#### Email de Notificação (opcional):
Configure para enviar email quando há nova reserva.

### Passo 3: Atualizar o Site

```javascript
webhooks: {
    // ...
    reservas: "https://hook.eu1.make.com/SEU_WEBHOOK_RESERVAS",
}
```

---

## 6. Como Fazer Deploy no Netlify

### Opção A: Via Interface Web

1. Aceda a [Netlify](https://netlify.com)
2. Clique em "Add new site" → "Deploy manually"
3. Arraste a pasta do projeto
4. Pronto! O site está online

### Opção B: Via GitHub (Recomendado)

1. Faça push do projeto para o GitHub
2. No Netlify, clique em "Add new site" → "Import an existing project"
3. Conecte o GitHub e selecione o repositório
4. Configure:
   - Build command: (deixar vazio)
   - Publish directory: `.`
5. Clique "Deploy"

### Domínio Personalizado

1. No Netlify, vá a "Domain settings"
2. Clique "Add custom domain"
3. Siga as instruções para configurar o DNS

---

## 7. Manutenção do Site

### Atualizar o Menu
- Basta editar a Google Sheet
- As alterações aparecem automaticamente no site

### Adicionar Testemunhos
- Edite `data/config.js`
- Adicione novos objetos ao array `testemunhos`

### Adicionar Fotos
- Coloque as novas fotos nas pastas correspondentes
- Atualize o HTML se necessário (para a galeria)

---

## 8. Suporte

Para questões técnicas ou ajuda adicional:
- Re-Evolution Digital Services
- Website: [re-evolution.pt](https://re-evolution.pt)

---

## Checklist de Lançamento

- [ ] Logo carregado (logo.png, logo-white.png)
- [ ] Favicons criados e carregados
- [ ] Imagem og-image.jpg criada (1200x630px)
- [ ] Fotos do restaurante carregadas
- [ ] Fotos das comidas carregadas
- [ ] Dados atualizados em config.js
- [ ] Redes sociais configuradas
- [ ] Testemunhos adicionados
- [ ] Webhook do menu configurado (opcional)
- [ ] Webhook de reservas configurado (opcional)
- [ ] Site testado em mobile
- [ ] Site publicado no Netlify
- [ ] Domínio personalizado configurado
- [ ] Google Analytics adicionado (opcional)
