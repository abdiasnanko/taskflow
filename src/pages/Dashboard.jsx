import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

import useLocalStorage from "../hooks/useLocalStorage";

function Dashboard() {

  const [tasks, setTasks] =
    useLocalStorage("taskflow_data", []);

  function handleAddTask(nouvelleTache) {

    setTasks([...tasks, nouvelleTache]);

  }
  function handleDeleteTask(id) {

  const nouvellesTaches =
    tasks.filter((task) => task.id !== id);

  setTasks(nouvellesTaches);
  }

  return (

    <div>

      <h1>TaskFlow</h1>

      <TaskForm onAddTask={handleAddTask} />

      {
        tasks.map((task) => (

          <TaskCard
            key={task.id}
            task={task}
            onDeleteTask={handleDeleteTask}
          />

        ))
      }

    </div>
  );
}

export default Dashboard;