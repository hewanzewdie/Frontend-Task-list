import PropTypes from "prop-types";

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function Task({ task, onCheck, onDelete }) {
  return (
    <div className="border  rounded-3 p-3 mb-2">
      <div className="d-flex align-items-center justify-content-between">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onCheck(task.id)}
        />
        <label
          className={`form-check-label ${
            task.completed
              ? "text-muted text-decoration-line-through opacity-50"
              : ""
          }`}
        >
          {task.title}
        </label>
        <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
