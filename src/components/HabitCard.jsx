export default function HabitCard({ title, goal, completed }) {
  return (
    <article className={`habit-card ${completed ? "is-complete" : "is-pendent"}`}>
      <div>
        <h2>{title}</h2>
        <p>Meta: {goal}</p>
      </div>
      
      {/* <span className="habit-status">
        {completed && <span aria-label="Concluído">✓</span>}
        {completed ? "Concluído" : "Pendente"}
      </span> */}
      <span className="habit-status">
        {completed
          ? <span aria-label="Concluído">✓ </span>
          : <span aria-label="Pendente">◌ </span>}
        {completed ? "Concluído" : "Pendente"}
      </span>
      
    </article>
  );

}