export const calculateStreak = (history) => {
  let streak = 0;
  

  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].done) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};
