import { useState } from "react";

function HabitForm({ addHabit }) {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habit.trim()) return;
    addHabit(habit);
    setHabit("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter new habit..."
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        className="border rounded px-3 py-2 w-64"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add
      </button>
    </form>
  );
}

export default HabitForm;
