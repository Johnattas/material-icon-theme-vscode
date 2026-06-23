<!-- markdownlint-disable -->

<p align="center">
  <img src="https://raw.githubusercontent.com/Johnattas/material-icon-theme-vscode/main/index.jpeg" alt="Max Big Icon Pack Banner" width="100%">
</p>

<h1 align="center">🎨 Max Big Icon Pack</h1>

<p align="center"><b>O maior pacote de ícones definitivo e de alta performance para o Visual Studio Code</b></p>

<p align="center">
  <img src="https://img.shields.io/badge/Vers%C3%A3o-1.2.57-4CAF50?style=for-the-badge&colorA=263238&colorB=4CAF50" alt="Versão">
  <img src="https://img.shields.io/badge/Licen%C3%A7a-MIT-blue?style=for-the-badge&colorA=263238&colorB=2196F3" alt="Licença">
  <img src="https://img.shields.io/badge/Status-Pronto%20para%20Uso-success?style=for-the-badge&colorA=263238&colorB=00E676" alt="Status">
  <img src="https://img.shields.io/badge/%C3%8Dcones-12.000%2B-orange?style=for-the-badge&colorA=263238&colorB=FF6F00" alt="Ícones">
</p>

<br />

## 📋 Índice

- [O que é?](#-o-que-é)
- [Por que escolher?](#-por-que-escolher-o-max-big-icon-pack)
- [Preview](#-preview)
- [Instalação](#️-instalação)
- [Como Ativar](#-como-ativar)
- [Customização](#️-customização-no-settingsjson)
- [Fontes dos Ícones](#-fontes-e-pacotes-de-ícones-utilizados)
- [Lista Completa de Ícones](#-lista-completa-de-ícones)
- [Contribuindo](#-contribuindo)
- [Contribuidores](#-contribuidores)

---

## 💡 O que é?

O **Max Big Icon Pack** é o tema de ícones mais completo e visualmente deslumbrante para o Visual Studio Code. Ele une a elegância minimalista do consagrado *Material Icon Theme* a uma curadoria monumental de **mais de 12.000 ícones de desenvolvimento** extraídos dos **100 melhores pacotes de ícones da KDE Store**.

Projetado para desenvolvedores modernos, o **Max Big Icon Pack** oferece reconhecimento visual imediato para linguagens de programação, frameworks e estruturas de pastas complexas do ecossistema de desenvolvimento atual.

---

## 🔥 Por que escolher o Max Big Icon Pack?

- 💎 **Biblioteca Gigante (+12.000 ícones)** — identificação precisa de quase qualquer tecnologia, extensão de arquivo ou framework.
- ⚡ **Performance Impecável** — passou por uma limpeza cirúrgica de **8.605 ícones inúteis** (bateria, bluetooth, wifi, etc.) para garantir carregamento ultrarrápido sem pesar na máquina.
- 📂 **Mapeamento Avançado de Pastas** — suporte visual nativo para diretórios modernos: `Http`, `stubs`, `Ai`, `workflows`, `whatsapp`, `factories`, `Popovers`, `.adonisjs`, `Inertia`, entre dezenas de outros.
- 🎛️ **Customização Total** — controle cores, saturação, opacidade e crie associações personalizadas com facilidade.
- 🌐 **Multi-editor** — funciona no VS Code, Cursor, Windsurf, VSCodium, Gitpod e qualquer editor compatível com extensões VSIX.

---

## 🖼️ Preview

### Ícones de Arquivos

<p align="center">
  <img src="https://raw.githubusercontent.com/Johnattas/material-icon-theme-vscode/main/images/fileIcons.png" alt="Preview de ícones de arquivos" width="100%">
</p>

### Ícones de Pastas

<p align="center">
  <img src="https://raw.githubusercontent.com/Johnattas/material-icon-theme-vscode/main/images/folderIcons.png" alt="Preview de ícones de pastas" width="100%">
</p>

### Seleção de Cor das Pastas

<p align="center">
  <img src="https://raw.githubusercontent.com/Johnattas/material-icon-theme-vscode/main/images/set-folder-color.gif" alt="GIF: selecionar cor das pastas" width="100%">
</p>

---

## 🛠️ Instalação

### Via VS Code Marketplace *(recomendado)*

1. Abra o VS Code.
2. Acesse a aba de Extensões (`Ctrl+Shift+X` / `Cmd+Shift+X`).
3. Pesquise por **`Max Big Icon Pack`**.
4. Clique em **Instalar**.

### Via arquivo `.vsix` (instalação manual)

```bash
code --install-extension max-big-icon-pack-1.2.56.vsix
```

> Disponível também para Cursor, Windsurf, VSCodium e outros editores compatíveis com o formato VSIX.

---

## ▶️ Como Ativar

<p align="center">
  <img src="https://raw.githubusercontent.com/Johnattas/material-icon-theme-vscode/main/images/commandPalette.png" alt="Paleta de Comandos" width="80%">
</p>

1. Abra a Paleta de Comandos:
   - **Windows/Linux:** `Ctrl+Shift+P`
   - **macOS:** `Cmd+Shift+P`
2. Digite **`Preferences: File Icon Theme`**.
3. Selecione **`Max Big Icon Pack`** na lista.

---

## ⚙️ Customização no `settings.json`

### Alterar a cor de pastas e arquivos padrão

```json
"material-icon-theme.folders.color": "#4fc3f7",
"material-icon-theme.files.color": "#81c784"
```

<p align="center">
  <img src="https://raw.githubusercontent.com/Johnattas/material-icon-theme-vscode/main/images/set-folder-theme.gif" alt="GIF: alterar tema das pastas" width="80%">
</p>

### Mudar opacidade e saturação dos ícones

```json
"material-icon-theme.opacity": 0.9,
"material-icon-theme.saturation": 0.85
```

### Criar associações de arquivos personalizadas

```json
"material-icon-theme.files.associations": {
  "*.sample": "typescript",
  "**.config.json": "json"
}
```

### Criar associações de pastas personalizadas

```json
"material-icon-theme.folders.associations": {
  "my-custom-folder": "src",
  "api-v2": "server"
}
```

---

## 📚 Fontes e Pacotes de Ícones Utilizados

Para criar a biblioteca visual mais rica possível, reunimos elementos gráficos de fontes consagradas e dos **100 maiores pacotes do KDE Store**:

**Fontes Primárias:**
- [Material Design Icons](https://pictogrammers.com/library/mdi/)
- [Material Symbols (Google)](https://fonts.google.com/icons)

**Top Pacotes da KDE Store integrados:**

| Pacote | Destaque |
|---|---|
| **Papirus Icon Theme** | Clareza e diversidade |
| **Breeze** | Padrão do KDE Plasma, limpo e profissional |
| **BeautyLine** | Colorido e moderno com gradientes vibrantes |
| **Candy Icons** | Estética neon/synthwave |
| **Zafiro Icons** | Minimalismo com cores pastéis |
| **Tela Icon Theme** | Design flat com cantos arredondados |
| **Kora** | Elegante com ótimos contrastes |

*Entre dezenas de outros pacotes selecionados para garantir cobertura total de extensões de código.*

---

## 📖 Lista Completa de Ícones

A lista completa está dividida em 3 partes para facilitar a navegação:

| Arquivo | Conteúdo | Ícones |
|---|---|---|
| 📁 [Ícones de Pastas](https://github.com/Johnattas/material-icon-theme-vscode/blob/main/SUPPORTED_ICONS_FOLDERS.md) | Todos os ícones de diretórios | ~1.800 |
| 📄 [Ícones de Arquivos A–M](https://github.com/Johnattas/material-icon-theme-vscode/blob/main/SUPPORTED_ICONS_FILES_A-M.md) | Arquivos começando com 0–9 e A–M | ~11.500 |
| 📄 [Ícones de Arquivos N–Z](https://github.com/Johnattas/material-icon-theme-vscode/blob/main/SUPPORTED_ICONS_FILES_N-Z.md) | Arquivos começando com N–Z | ~7.000 |

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Leia o [guia de contribuição](CONTRIBUTING.md) para começar.

Reporte bugs e sugestões em [Issues](https://github.com/Johnattas/material-icon-theme-vscode/issues).

Veja as mudanças de cada versão no [CHANGELOG](CHANGELOG.md).

---

## 👥 Contribuidores

Agradecemos imensamente a todos que tornaram o projeto possível!

[![Contribuidores](https://raw.githubusercontent.com/Johnattas/material-icon-theme-vscode/main/images/contributors.png)](https://github.com/Johnattas/material-icon-theme-vscode/graphs/contributors)

*Desenvolvido com carinho para a comunidade por **Johnattas Santana**.*
