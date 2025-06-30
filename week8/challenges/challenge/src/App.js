import React, { createContext, useContext, useReducer, useRef, useState } from "react";

// 1. Contexte
const TaskContext = createContext();

// 2. Actions
const ACTIONS = {
  ADD: "ADD_TASK",
  TOGGLE: "TOGGLE_TASK",
  EDIT: "EDIT_TASK",
  FILTER: "FILTER_TASKS"
};

// 3. Reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false }
        ]
      };

    case ACTIONS.TOGGLE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };

    case ACTIONS.EDIT:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        )
      };

    case ACTIONS.FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
};

// 4. Provider
const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    filter: "ALL"
  });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// 5. Composant d'ajout de tâche
const AddTask = () => {
  const { dispatch } = useContext(TaskContext);
  const inputRef = useRef();

  const handleAdd = () => {
    const text = inputRef.current.value.trim();
    if (text !== "") {
      dispatch({ type: ACTIONS.ADD, payload: text });
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Nouvelle tâche" />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
};

// 6. Composant pour l'affichage et l'édition des tâches
const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [editId, setEditId] = useState(null);
  const editRef = useRef();

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "ALL") return true;
    if (state.filter === "COMPLETED") return task.completed;
    if (state.filter === "ACTIVE") return !task.completed;
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch({ type: ACTIONS.TOGGLE, payload: task.id })}
          />

          {editId === task.id ? (
            <>
              <input
                ref={editRef}
                defaultValue={task.text}
              />
              <button
                onClick={() => {
                  dispatch({
                    type: ACTIONS.EDIT,
                    payload: { id: task.id, text: editRef.current.value }
                  });
                  setEditId(null);
                }}
              >
                Sauver
              </button>
            </>
          ) : (
            <>
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
              </span>
              <button onClick={() => setEditId(task.id)}>Modifier</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

// 7. Composant de filtrage
const FilterButtons = () => {
  const { dispatch, state } = useContext(TaskContext);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: ACTIONS.FILTER, payload: "ALL" })}
        style={{ fontWeight: state.filter === "ALL" ? "bold" : "normal" }}
      >
        Toutes
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.FILTER, payload: "ACTIVE" })}
        style={{ fontWeight: state.filter === "ACTIVE" ? "bold" : "normal" }}
      >
        Actives
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.FILTER, payload: "COMPLETED" })}
        style={{ fontWeight: state.filter === "COMPLETED" ? "bold" : "normal" }}
      >
        Terminées
      </button>
    </div>
  );
};

// 8. App principale
function App() {
  return (
    <TaskProvider>
      <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
        <h1> Enhanced Task Manager</h1>
        <AddTask />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
