# Pomodoro Timer ⏱️

[![Live Demo](https://img.shields.io/badge/Live_Demo-🌐_Acessar-blue?style=for-the-badge)](https://seu-usuario.github.io/pomodoro-timer)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![Stack](https://skillicons.dev/icons?i=html,ts,tailwind,vite&theme=dark)](https://skillicons.dev)


**Experimente agora:** [Demo](https://https://luanckrg.github.io/Pomodoro/)

> Um timer Pomodoro moderno construído com TypeScript Vanilla e arquitetura Observer Pattern, utilizando Vite como bundler, Tailwind CSS para estilos e Biome para qualidade de código.


## ✨ Funcionalidades

- **Ciclos Personalizáveis**
  - 🍅 Pomodoro: 25min (personalizável)
  - ☕ Pausa Curta: 5min (personalizável)
  - 🌴 Pausa Longa: 15min (personalizável)
  
- **Controles Inteligentes**
  - ▶️/⏸️ Botão único para Start/Pause
  - 🔄 Reset de ciclo
  - 🎚️ Seleção manual de qualquer ciclo
  
- **Personalização**
  - 🎨 Temas visuais diferentes para cada ciclo
  - ⚙️ Configurações salvas automaticamente
  - 📲 Interface responsiva

- **Feedback Visual**
  - 📊 Barra de progresso animada
  - 🔢 Contador de pomodoros
  - 🔄 Indicação da próxima sessão

## 🧠 Padrão Observer

**Diagrama de Comunicação:**  
`PomodoroTimer (Subject)` ↔ Notifica → `DisplayController (Observer)`  
`PomodoroTimer (Subject)` ↔ Notifica → `ButtonController (Observer)`  
`PomodoroTimer (Subject)` ↔ Notifica → `ModalController (Observer)`

**Implementação:**
- **Subject Principal:** `PomodoroTimer`
  - Mantém o estado central da aplicação
  - Gerencia a lógica do timer
  - Notifica observers sobre mudanças de estado

- **Observers:**
  - `DisplayController`: Atualiza tempo, progresso e temas
  - `ButtonController`: Controla estados dos botões
  - `ModalController`: Gerencia configurações do usuário

## 🛠 Tech Stack  

    Architecture:
    - Observer Pattern
    - Clean Architecture
    - Dependency Injection
    
    Tooling:
    - Vite (Build Tool)
    - Biome (Linting/Formatting)
    - TypeScript 5+

    Styling:
    - Tailwind CSS v4 (Utility-first with custom configuration)  
    - CSS Variables for theming  
    - Responsive Design  

## 📂 Estrutura de Código

    src/
    ├── core/          # Observer pattern implementation
    ├── features/      # Timer logic
    ├── ui/            # Controllers
    ├── services/      # localStorage API
    └── styles/        # Tailwind config


## 🚀 Instalação

1. Clone o repositório:
`git clone https://github.com/LuanCKRG/Pomodoro.git`

2. Instale as dependências:
`npm install`

3. Inicie o servidor:
`npm run dev`

4. Acesse:
`http://localhost:3000`

## 🤝 Contribuição

1. Faça fork do projeto
2. Crie sua branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

MIT - Veja [LICENSE](LICENSE) para detalhes

---

Desenvolvido com ❤️ por [Seu Nome] - [GitHub](https://github.com/LuanCKRG)