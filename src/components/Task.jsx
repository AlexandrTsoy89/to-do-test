export function Task({ description, completed, created }) {
  return (
    <>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          readOnly
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{created.toLocaleDateString()}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" value={description} readOnly />
    </>
  );
}
