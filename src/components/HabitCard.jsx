export default function HabitCard({
  id,
  title,
  goal = "Sem meta definida",
  completed,
  onShowDetails,
}) {
  return (
    <article className={`habit-card ${completed ? "is-complete" : "is-pendent"}`}>
      <div>
        <h2>{title}</h2>
        <p>Meta: {goal}</p>
      </div>
      <div className="habit-actions">
        <span className="habit-status">
          {completed
            ? <span aria-label="Concluído">✓ </span>
            : <span aria-label="Pendente">◌ </span>}
          {completed ? "Concluído" : "Pendente"}
        </span>
        <button type="button" onClick={() => onShowDetails(id)}>
          Ver detalhes
        </button>
      </div>
    </article>
  );
}
