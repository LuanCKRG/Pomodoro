# Pomodoro Timer ⏱️  

**🇧🇷 Português:** [Read in Portuguese](README.pt.md)  

[![Live Demo](https://img.shields.io/badge/Live_Demo-🌐_Visit-blue?style=for-the-badge)](https://your-username.github.io/pomodoro-timer)  
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)  
[![Stack](https://skillicons.dev/icons?i=html,ts,tailwind,vite&theme=dark)](https://skillicons.dev)  

**Visit now:** [Demo](https://https://luanckrg.github.io/Pomodoro/)

> A modern Pomodoro Timer built with Vanilla TypeScript and Observer Pattern architecture, powered by Vite, Tailwind CSS v4, and Biome for code quality.

## ✨ Key Features  

- **Customizable Cycles**  
  - 🍅 Pomodoro: 25min (customizable)  
  - ☕ Short Break: 5min (customizable)  
  - 🌴 Long Break: 15min (customizable)  

- **Smart Controls**  
  - ▶️/⏸️ Single toggle button for Start/Pause  
  - 🔄 Reset cycle  
  - 🎚️ Manual cycle selection  

- **Visual Feedback**  
  - 📊 Animated progress bar  
  - 🔢 Pomodoro counter  
  - 🔄 Next session indicator  

- **Advanced Customization**  
  - 🎨 Dynamic themes for each cycle  
  - ⚙️ Settings saved to localStorage  
  - 📲 Mobile-friendly design  

## 🧠 Observer Pattern Implementation  

**Communication Flow:**  
`PomodoroTimer (Subject)` ↔ Notifies → `DisplayController (Observer)`  
`PomodoroTimer (Subject)` ↔ Notifies → `ButtonController (Observer)`  
`PomodoroTimer (Subject)` ↔ Notifies → `ModalController (Observer)`  

**Implementation Details:**  
- **Subject:** `PomodoroTimer` manages core state and notifications  
- **Observers:**  
  - `DisplayController`: Updates UI elements  
  - `ButtonController`: Handles button states  
  - `ModalController`: Manages settings modal  


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


## 📂 Project Structure  

    src/
    ├── core/          # Observer pattern implementation
    ├── features/      # Timer logic
    ├── ui/            # Controllers
    ├── services/      # localStorage API
    └── styles/        # Tailwind config

## 🚀 Installation  

1. Clone the repo:
```bash
  git clone https://github.com/LuanCKRG/Pomodoro.git
```

2. Install dependecies:
```bash
  npm install
```

3. Start dev server:
```bash
  npm run dev
```

4. Visit:
```bash
  http://localhost:5173
```

## 🤝 Contributing  

1. Create an issue to discuss changes  
2. Fork the repository  
3. Submit PR with detailed description  

## 📄 License  

MIT - See [LICENSE](LICENSE) for details  

---

Developed by [Your Name] - [GitHub Profile](https://github.com/LuanCKRG)