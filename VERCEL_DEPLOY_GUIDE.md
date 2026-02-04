# Guia de Deploy no Vercel - Ludman Website

## 🚀 Deploy Rápido

### 1. Aceder ao Vercel
1. Ir para [vercel.com](https://vercel.com)
2. Fazer login com a conta GitHub

### 2. Importar Repositório
1. Clicar em **"Add New Project"**
2. Selecionar o repositório **mumaggos/Newsite**
3. Clicar em **"Import"**

### 3. Configurar Build Settings

O Vercel deverá detetar automaticamente as configurações, mas confirme:

```
Framework Preset: Vite
Build Command: pnpm build
Output Directory: dist/public
Install Command: pnpm install
```

### 4. Variáveis de Ambiente

Adicionar as seguintes variáveis de ambiente no Vercel:

#### Obrigatórias
```bash
# Polygon RPC (pode usar público ou Alchemy/Infura)
VITE_POLYGON_RPC_URL=https://polygon-rpc.com

# Endereços dos contratos (já configurados no código)
# Estes valores já estão hardcoded em client/src/lib/contracts.ts
```

#### Opcionais (Analytics)
```bash
VITE_ANALYTICS_ID=seu-google-analytics-id
VITE_ANALYTICS_ENDPOINT=seu-umami-endpoint
VITE_ANALYTICS_WEBSITE_ID=seu-umami-website-id
```

### 5. Deploy
1. Clicar em **"Deploy"**
2. Aguardar 2-3 minutos
3. ✅ Site estará live!

---

## ⚙️ Configuração Avançada

### Domínio Personalizado
1. No dashboard do projeto no Vercel
2. Ir para **Settings → Domains**
3. Adicionar `lubdan.com` e `www.lubdan.com`
4. Configurar DNS conforme instruções do Vercel

### Headers de Segurança (Opcional)
O `vercel.json` já inclui headers otimizados:
- Cache-Control para assets
- Security headers (X-Frame-Options, etc.)
- CORS configurado

### Redirects (Opcional)
Adicionar no `vercel.json` se necessário:
```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

---

## 🔍 Verificar Deploy

### 1. Testar Funcionalidades
- ✅ Home page carrega rapidamente
- ✅ Navegação entre páginas funciona
- ✅ Imagens carregam em WebP
- ✅ Web3 connect funciona (MetaMask)
- ✅ Presale widget funciona
- ✅ Dashboard mostra saldo
- ✅ Todas as páginas acessíveis

### 2. Testar Performance
1. Abrir [PageSpeed Insights](https://pagespeed.web.dev/)
2. Inserir URL do Vercel
3. Verificar scores:
   - **Mobile:** >= 85 (target: 90+)
   - **Desktop:** >= 90

### 3. Testar em Dispositivos
- Desktop (Chrome, Firefox, Safari)
- Mobile (iOS Safari, Android Chrome)
- Tablet

---

## 🐛 Troubleshooting

### Build Falha
**Erro:** `pnpm not found`
- **Solução:** Vercel usa pnpm automaticamente se detectar `pnpm-lock.yaml`

**Erro:** `Module not found`
- **Solução:** Verificar que todas as dependências estão em `package.json`
- Executar `pnpm install` localmente para confirmar

### Site Não Carrega
**Erro:** Página em branco
- **Solução:** Verificar console do browser para erros
- Confirmar que `VITE_POLYGON_RPC_URL` está configurado

**Erro:** Web3 não conecta
- **Solução:** Verificar que está na rede Polygon
- Confirmar endereços dos contratos em `client/src/lib/contracts.ts`

### Performance Baixa
**Problema:** Lighthouse score < 85
- **Solução:** 
  1. Verificar que imagens WebP estão a ser servidas
  2. Confirmar que compression está ativa
  3. Verificar cache headers no Network tab

---

## 📊 Monitorização

### Vercel Analytics (Incluído)
- Pageviews automáticos
- Web Vitals tracking
- Geo-distribution

### Google Analytics (Opcional)
Já configurado em `client/index.html`, apenas adicionar `VITE_ANALYTICS_ID`

### Lighthouse CI (Recomendado)
Adicionar ao GitHub Actions para testes automáticos em cada deploy

---

## 🔄 Atualizações Futuras

### Deploy Automático
Cada push para `main` faz deploy automático no Vercel

### Preview Deploys
Cada Pull Request cria um preview deploy único

### Rollback
No dashboard do Vercel, pode fazer rollback para qualquer deploy anterior

---

## 📝 Checklist Final

Antes de ir para produção:

- [ ] Domínio configurado
- [ ] SSL/HTTPS ativo (automático no Vercel)
- [ ] Variáveis de ambiente configuradas
- [ ] Performance testada (Lighthouse >= 85)
- [ ] Funcionalidades testadas
- [ ] Web3 testado na Polygon mainnet
- [ ] Analytics configurado
- [ ] Sitemap submetido ao Google Search Console
- [ ] robots.txt verificado

---

## 🎉 Pronto!

O site está otimizado e pronto para produção. Qualquer dúvida, consultar:
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Vite](https://vitejs.dev/)
- `PERFORMANCE_REPORT.md` para detalhes das otimizações

**URL do repositório:** https://github.com/mumaggos/Newsite
