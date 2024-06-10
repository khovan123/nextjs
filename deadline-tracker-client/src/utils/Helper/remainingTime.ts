export const getRemainingTime = (currentTime: Date, time_end: Date): string => {
  const remainingTime = time_end.getTime() - currentTime.getTime();
  if (remainingTime <= 0) {
    return "Expired";
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  return `${days}d ${hours}h ${minutes}m`;
};
