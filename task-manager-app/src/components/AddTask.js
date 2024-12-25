// import React, { useState } from "react";
// import "./AddTask.css";

// function AddTask({ addTask }) {
//   const [task, setTask] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim()) {
//       addTask(task);
//       setTask("");
//     }
//   };

//   return (
//     <form className="add-task" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter a task..."
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// }

// export default AddTask;


import React, { useState } from "react";
import "./AddTask.css";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;