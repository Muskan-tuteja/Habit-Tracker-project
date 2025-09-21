import HabitCard from "./HabitCard";

function HabitList({ habits, toggleHabit, deleteHabit }) {
  if (habits.length === 0) {
    return <p className="text-gray-600">No habits yet. Add one!</p>;
  }

  return (
    <div className="w-full max-w-lg flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
}

export default HabitList;
