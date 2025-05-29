# SimpleToDo

A simple and modern week-based to-do app built with React Native and Expo. Organize your tasks by day, toggle between light and dark themes, and enjoy a clean, mobile-friendly experience. This app was heavily inspired by [Weekstack](https://weekstack.io/) , but it is only available on iOS. The challenge here is to start with simulating a similar experience, and expand further while keeping a sleek UX but solving key user problems.

## Features
- Organize tasks by day of the week
- Add, complete, and delete tasks
- Expand/collapse days for a focused view
- Light and dark theme toggle
- Persistent storage using AsyncStorage (No data sent to the cloud)

## Project Structure

```
.
├── App.js                # Main app logic and state wiring
├── components/           # Reusable UI components (DayBlock, TaskRow, AddTaskModal, ThemeToggle)
├── hooks/                # Custom React hooks (useTasks, useCurrentTime)
├── utils.js              # Utility functions (date formatting, etc)
├── theme.js              # Theme objects (light/dark/base)
├── styles.js             # Centralized StyleSheet
├── ...                   # Native and config files
```

## Architecture & Best Practices
- **Highly modular:** UI, logic, and styles are separated for maintainability and scalability.
- **Custom hooks:** All business logic (task management, time) is encapsulated in hooks for reusability and testability.
- **Single-responsibility components:** Each component does one thing and is easy to test and extend.
- **Centralized theming and styles:** Themes and styles are managed in their own files for easy updates and consistency.
- **Persistent local storage:** All data is stored locally using AsyncStorage; no cloud or external API dependencies.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/simpleToDo.git
   cd simpleToDo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npx expo start
   ```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
[MIT](LICENSE) 