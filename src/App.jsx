import { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import HabitChart from "./components/HabitChart";

function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      history: [], // {date: "2025-09-21", done: true}
    };
    setHabits([...habits, newHabit]);
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  const toggleHabit = (id) => {
    const today = new Date().toISOString().split("T")[0];
    setHabits(
      habits.map((h) => {
        if (h.id === id) {
          let updatedHistory = [...h.history];
          const existing = updatedHistory.find((d) => d.date === today);
          if (existing) {
            existing.done = !existing.done;
          } else {
            updatedHistory.push({ date: today, done: true });
          }
          return { ...h, history: updatedHistory };
        }
        return h;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🔥 Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} toggleHabit={toggleHabit} deleteHabit={deleteHabit} />
      <HabitChart habits={habits} />
    </div>
  );
}

export default App;
