# ARCAM - Site da Associação de Rádio Amador de Campos dos Goytacazes

Site institucional da ARCAM desenvolvido em React com integração EmailJS.

## 🚀 Como executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Extraia o arquivo ZIP
2. Navegue até a pasta do projeto:
```bash
cd arcam-site
```

3. Instale as dependências:
```bash
npm install
```

4. Instale o Tailwind CSS e suas dependências:
```bash
npm install -D tailwindcss postcss autoprefixer
```

5. Execute o projeto:
```bash
npm start
```

O site será aberto automaticamente em `http://localhost:3000`

## 📦 Build para produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `build/`

## 🛠️ Tecnologias utilizadas

- React 18
- Tailwind CSS
- Font Awesome Icons
- EmailJS (para envio de emails)

## 📱 Funcionalidades

- Design responsivo
- Menu mobile
- Seções: Início, Sobre, Atividades, Contato
- Modal de associação com formulário completo
- **Envio de emails via EmailJS** ✨
- **Imagem de fundo na seção Hero** 🖼️
- Animações e transições suaves
- Feedback visual de envio (loading, sucesso, erro)

## ✨ Integração EmailJS

O formulário de associação está integrado com o EmailJS para envio automático de emails.

### Credenciais Configuradas:
- **Service ID:** service_9h8pfbo
- **Template ID:** template_uem8l6o
- **Public Key:** JWsuTyZFW1lm-AeYh

## 🎨 Paleta de Cores

### Azul e Amarelo
- **Azul:** Tons de blue-800, blue-700, blue-600, blue-500
- **Amarelo:** Tons de yellow-600, yellow-400, yellow-300, yellow-100, yellow-50

## 🖼️ Imagem de Fundo

A seção Hero utiliza uma imagem de fundo de Campos dos Goytacazes com overlay azul semi-transparente para manter a legibilidade do texto.

## 73! 📻

Saudações radioamadorísticas!


## 📸 Carrossel de Fotos na Home (Hero)

O carrossel usa a biblioteca Swiper e **não exige alteração de código** para trocar as fotos.\n
### Como usar:
1. Coloque suas imagens na pasta `public/carousel/` (ex: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`).\n2. Opcionalmente, edite o arquivo `public/carousel/config.json` para definir a ordem e os arquivos exatos.\n3. Se `config.json` não existir ou estiver vazio, o sistema tenta automaticamente: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, `foto4.jpg`.\n4. Para adicionar/remover fotos, basta mexer nos arquivos da pasta ou no `config.json`. Não é necessário alterar o código.\n