# 📝 React Todo Dashboard (TypeScript)

A simple yet powerful **Todo Application** built using **React + TypeScript**, featuring task management, filtering, statistics, and persistent storage using Local Storage.

---

## 🚀 Features

- ➕ Add new tasks with priority
- ✅ Mark tasks as completed / pending
- 🗑️ Delete tasks
- 🔍 Search tasks by title
- 🎯 Filter tasks by:
  - Status (Pending / Completed)
  - Priority (High / Medium / Low)
- 📊 Live statistics dashboard:
  - Total tasks
  - Completed tasks
  - Pending tasks
- 💾 Persistent storage using `localStorage`
- 🎨 Clean and responsive UI using inline styling

---

## 🧱 Project Structure


src/
│
├── components/
│ ├── Dashboard/
│ │ └── Dashboard.tsx
│ ├── TaskForm/
│ │ └── TaskForm.tsx
│ ├── TaskFilter/
│ │ └── TaskFilter.tsx
│ ├── TaskList/
│ │ └── TaskList.tsx
│ ├── TaskItem/
│ └── TaskItem.tsx
│
├── types/
│ └── index.ts
│
├── utils/
│ └── taskUtils.ts
│
├── App.tsx
└── main.tsx


---

## 🧠 Core Concepts Used

### 1. React Hooks
- `useState` → state management
- `useEffect` → side effects (localStorage sync)

### 2. TypeScript
- Strong typing for `Task`, `Priority`, and `Status`
- Interface-based props validation

### 3. Component Architecture
- Reusable components (TaskForm, TaskList, TaskFilter)
- Parent-child data flow via props

### 4. State Management Flow


App.tsx (Global State)
↓
Dashboard (Controls + Filters + Stats)
↓
TaskForm → Adds Task
TaskList → Displays Tasks
TaskItem → Individual Task Actions


---

## 💾 Local Storage

Tasks are automatically saved and loaded from browser storage.

```ts
localStorage key: "my_tasks"

Utility functions:

getStoredTasks() → Load saved tasks
saveTasks(tasks) → Save tasks
📌 Task Model
type Priority = "High" | "Medium" | "Low";
type Status = "pending" | "completed";

interface Task {
  id: string;
  title: string;
  priority: Priority;
  status: Status;
  duedate: string;
}
🛠️ Installation & Setup
# Clone the repo
git clone https://github.com/your-username/todo-dashboard.git

# Move into project
cd todo-dashboard

# Install dependencies
npm install

# Run development server
npm run dev
📸 UI Overview
Dashboard shows task stats
Filters allow dynamic searching
Form for adding tasks
List displays all tasks with actions