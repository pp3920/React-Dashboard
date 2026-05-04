Write a reflection addressing:
How you implemented React and TypeScript features

Strict Typing: I defined a Task interface in index.ts to ensure every task has a consistent structure (ID, title, priority, status).  

Union Types: I used Union types for Priority ('High', 'Medium', 'Low') and Status to prevent invalid data entries.  

Functional Components: All components were built as React.FC with explicit Props interfaces to ensure type safety during data passing.  

Hooks: useState was used for local UI filters, while useEffect handled the lifecycle for loading and saving data.


The challenges you encountered and how you overcame them

Persistence: Keeping the UI in sync with localStorage was tricky. I solved this by creating a taskUtils.ts helper and using a useEffect hook in the boss component (App.tsx) to auto-save on every change.  Combined Filtering: Managing search, status, and priority simultaneously required complex logic. I implemented a multi-conditional .filter() in Dashboard.tsx to handle all criteria in a single pass. 

Your approach to component composition and state management
Lifting State Up: I kept the master task list in App.tsx (the central hub) and passed data down via props. This ensures a "single source of truth".  Modular Architecture: I used component composition by breaking the UI into logical units: a Dashboard for layout/stats, a TaskForm for inputs, and a TaskList for rendering.  Derived State: Instead of extra state variables, I calculated statistics (like completedTasks) directly from the existing tasks array to keep the data perfectly synced.  