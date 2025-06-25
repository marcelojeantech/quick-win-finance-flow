# 🚀 Guia de Deploy - Quick Win Finance Flow

## Plataformas Gratuitas Recomendadas

### 1. **Vercel** (Mais Recomendado)
- ✅ Deploy automático via Git
- ✅ CDN global
- ✅ HTTPS automático
- ✅ Preview de branches
- ✅ Otimizado para React/Vite

**Como fazer o deploy:**

1. **Via GitHub (Recomendado):**
   - Faça push do código para o GitHub
   - Acesse [vercel.com](https://vercel.com)
   - Conecte sua conta GitHub
   - Importe o repositório
   - Deploy automático! 🎉

2. **Via CLI:**
   ```bash
   npx vercel
   # Siga as instruções
   ```

### 2. **Netlify**
- ✅ Deploy via Git ou drag-and-drop
- ✅ Formulários grátis
- ✅ Functions serverless
- ✅ CDN global

**Como fazer o deploy:**

1. **Via GitHub:**
   - Acesse [netlify.com](https://netlify.com)
   - Conecte GitHub
   - Selecione o repositório
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Via Drag-and-Drop:**
   ```bash
   npm run build
   # Arraste a pasta 'dist' para netlify.com/drop
   ```

### 3. **GitHub Pages**
- ✅ Gratuito para repositórios públicos
- ✅ Integração nativa com GitHub

**Como fazer o deploy:**

1. Instale o gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Adicione ao package.json:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://seuusuario.github.io/nome-do-repo"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 4. **Surge.sh**
- ✅ Deploy super rápido
- ✅ CLI simples

**Como fazer o deploy:**
```bash
npm run build
npx surge dist
```

## ⚙️ Configurações Importantes

### Variáveis de Ambiente
Para produção, você precisará configurar as variáveis de ambiente na plataforma escolhida:

- `OMIE_APP_KEY`: Sua chave da API do Omie
- `OMIE_APP_SECRET`: Seu secret da API do Omie
- `NODE_ENV`: production

### Build Otimizado
O projeto já está configurado para builds otimizados com:
- ✅ Minificação
- ✅ Tree shaking
- ✅ Code splitting
- ✅ Compressão de assets

## 🔧 Solução de Problemas

### Erro de React Production Mode
Se você encontrar o erro "React is running in production mode, but dead code elimination has not been applied", execute:

```bash
npm run build
# Verifique se o build foi criado corretamente
ls -la dist/
```

### Rotas não funcionam (404)
Certifique-se de que sua plataforma está configurada para SPA (Single Page Application):
- **Vercel**: O arquivo `vercel.json` já está configurado
- **Netlify**: Adicione um arquivo `_redirects` na pasta `public`:
  ```
  /*    /index.html   200
  ```

## 🎯 Recomendação Final

**Use o Vercel** - É a opção mais simples e robusta para aplicações React/Vite:

1. Faça push para o GitHub
2. Conecte no Vercel
3. Deploy automático em segundos!

URL de exemplo: `https://seu-projeto.vercel.app` 