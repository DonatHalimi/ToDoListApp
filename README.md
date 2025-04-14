# ToDoListApp

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [package.json](#packagejson)

## Overview

This application allows users to manage their tasks, mark them as completed, and edit existing tasks. Users can organize their tasks through intuitive drag-and-drop operations and see a visual progress bar to represent their task completion status.

## Live Demo

Explore the ToDoListApp live on [Vercel](https://to-do-list-app-rose.vercel.app).

## Features

- Add new tasks with instant feedback
- Mark tasks as completed with visual indicators
- Edit existing tasks inline
- Delete tasks with confirmation dialog
- Progress tracking with visual progress bar
- Easily rearrange tasks by dragging them to new positions

## Technologies Used

- [React](https://reactjs.org/)
- [React-Redux](https://react-redux.js.org)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [FontAwesome](https://fontawesome.com/v6/docs/web/use-with/react/)
- [UUID](https://www.npmjs.com/package/uuid)
- [React-Beautiful-Dnd](https://react-beautiful-dnd.netlify.app/)

## Getting Started

Follow these steps to run the ToDoListApp locally on your machine:

1. **Clone the Repository:**

```bash
git clone https://github.com/DonatHalimi/ToDoListApp.git
```
2. **Navigate to the Project Directory:**
```bash
cd ToDoListApp
```
3. **Install Dependencies:**
```bash
npm install
```
4. **Run the App:**
```bash
npm run dev
```
5. **Access Vite Shortcuts:**

To view available keyboard shortcuts, type the following command in the terminal:

```bash
h + enter
```

This will display the available shortcuts:
```bash
Shortcuts
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit
```

``package.json``

```json
{
  "name": "todolist",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port 3000 --open",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.5.1",
    "@fortawesome/free-regular-svg-icons": "^6.5.1",
    "@fortawesome/free-solid-svg-icons": "^6.5.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@reduxjs/toolkit": "^2.1.0",
    "react": "^18.2.0",
    "react-beautiful-dnd": "^13.1.1",
    "react-dom": "^18.2.0",
    "react-redux": "^9.1.0",
    "react-toastify": "^10.0.4",
    "redux": "^5.0.1",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "vite": "^5.0.8"
  }
}
```

- [**Fortawesome**](https://fontawesome.com/v6/docs/web/use-with/react/) - Font Awesome is a set of vector icons that you can use in web projects. It's free to use and has a large selection of icons.
- [**React-Redux**](https://react-redux.js.org/) - Redux is a predictable state container for JavaScript apps. It helps you write application logic more predictably, and makes it easier to manage and react to state changes.
- [**React-Toastify**](https://fkhadra.github.io/react-toastify/) - React Toastify is a simple and easy to use toast notification library for React.
- [**UUID**](https://www.npmjs.com/package/uuid) - UUID is a library for generating unique identifiers in JavaScript.
- [**React-Beautiful-Dnd**](https://react-beautiful-dnd.netlify.app/) - React Beautiful DnD is a drag and drop library for React that allows users to reorder items in a list or grid.