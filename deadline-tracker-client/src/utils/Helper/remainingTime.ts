import { IDeadline } from "@/components/interfaces/data";

export const getRemainingTime = (time_start: Date, time_end: Date): string => {
  const currentTime: Date = new Date();
  const remainingTime = time_end.getTime() - currentTime.getTime();
  if (remainingTime <= 0) {
    return "Expired";
  }

  if (time_start > time_end) {
    return "Expired";
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  return `${days}d ${hours}h ${minutes}m`;
};
export const getOnTime = (time_start: Date, time_end: Date): number => {
  const currentTime: Date = new Date();
  const remainingTime = time_end.getTime() - currentTime.getTime();
  if (remainingTime <= 0) {
    return -1;
  }

  if (time_start > time_end) {
    return 0;
  }

  return remainingTime;
};
export const getStatus = (
  time_start: Date,
  time_end: Date
): "pending" | "processing" | "success" | "failed" => {
  let status: string = getRemainingTime(time_start, time_end);
  const currentTime: Date = new Date();

  if (status === "Expired") {
    return "failed";
  } else if (time_start > currentTime) {
    return "pending";
  } else if (currentTime >= time_start && currentTime <= time_end) {
    return "processing";
  } else return "success";
};

export const sortByTime = (data: IDeadline[]): IDeadline[] => {
  return data.sort(
    (a: IDeadline, b: IDeadline) =>
      getOnTime(a.time_start, a.time_end) - getOnTime(b.time_start, b.time_end)
  );
};
