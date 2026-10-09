import "./App.css";
import HabitList from "./components/HabitList";
import Panel from "./components/Panel";
import { initialHabits } from "./data/habits";

export default function App() {
  const completedCount = initialHabits.filter(
    (habit) => habit.completed,
  ).length;

  function handleShowDetails(habitId) {
    const habit = initialHabits.find((item) => item.id === habitId);

    console.log("Hábito solicitado:", habitId, habit);

    if (habit) {
      const goal = habit.goal === undefined
        ? "Sem meta definida"
        : habit.goal;
      window.alert(`${habit.title} — Meta: ${goal}`);
    }
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">MY DAILY HABITS</p>
        <h1>Pequenos hábitos, progresso visível.</h1>
        <p>
          {completedCount} de {initialHabits.length} hábitos concluídos.
        </p>
      </header>

      <Panel title="Hábitos de hoje">
        <HabitList
          habits={initialHabits}
          onShowDetails={handleShowDetails}
        />
      </Panel>

      <Panel title="Sobre o projeto">
        <p>My Daily Habits — projeto do Módulo 04.</p>
      </Panel>
    </main>
  );
}
