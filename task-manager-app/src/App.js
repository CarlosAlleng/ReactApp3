// import React, { useState, useEffect } from "react";
// import AddTask from "./components/AddTask";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await fetch("backend/get_tasks.php");
//       if (response.ok) {
//         const data = await response.json();
//         setTasks(data);
//       }
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };

//   const addTask = async (task) => {
//     try {
//       const response = await fetch("backend/add_task.php", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ task }),
//       });
//       if(response.ok){
//          fetchTasks();
//       }

//     } catch (error) {
//       console.error("Error adding task:", error);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>Task List</h1>
//       <AddTask addTask={addTask} />
//       <div className="content">
//       <h2>Tasks</h2>
//       <ul>
//         {tasks.map((task, index) => (
//             <li key={index}>{task}</li>
//         ))}
//       </ul>
//         </div>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch initial tasks from the PHP backend
    fetch("http://localhost/get_tasks.php")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = (task) => {
    fetch("http://localhost/add_task.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((response) => response.json())
      .then((newTask) => {
        if (newTask) {
          setTasks([...tasks, newTask]);
        }
      });
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <AddTask addTask={addTask} />
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            {task}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
