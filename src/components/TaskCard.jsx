import { Link } from "react-router-dom";

function TaskCard({ task, onDeleteTask }) {

  return (

    <div>

      <Link to={`/task/${task.id}`}>

        <div>

          <h2>{task.titre}</h2>

          <p>{task.description}</p>

          <strong>{task.statut}</strong>

        </div>

      </Link>

      <button
        onClick={() => onDeleteTask(task.id)}
      >
        Supprimer
      </button>

    </div>
  );
}

export default TaskCard;