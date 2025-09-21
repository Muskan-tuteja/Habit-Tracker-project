import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function HabitChart({ habits }) {
  const today = new Date();
  const last7Days = [...Array(7)].map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return d.toISOString().split("T")[0];
  });

  const data = last7Days.map((date) => {
    const count = habits.reduce((acc, h) => {
      const entry = h.history.find((d) => d.date === date && d.done);
      return acc + (entry ? 1 : 0);
    }, 0);
    return { date, habits: count };
  });

  return (
    <div className="w-full max-w-2xl mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Weekly Progress</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="habits" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HabitChart;
