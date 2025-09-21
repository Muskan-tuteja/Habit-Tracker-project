function HabitCard({ habit, toggleHabit, deleteHabit }) {
  const today = new Date().toISOString().split("T")[0];
  const todayEntry = habit.history.find((d) => d.date === today);

  // streak calculation
  let streak = 0;
  for (let i = habit.history.length - 1; i >= 0; i--) {
    if (habit.history[i].done) {
      streak++;
    } else {
      break;
    }
  }

  return (
    <div className="bg-white shadow-md rounded p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-lg">{habit.name}</h3>
        <p className="text-sm text-gray-500">🔥 Streak: {streak} days</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => toggleHabit(habit.id)}
          className={`px-3 py-1 rounded ${todayEntry?.done ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          {todayEntry?.done ? "Done" : "Mark"}
        </button>
        <button
          onClick={() => deleteHabit(habit.id)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default HabitCard;
