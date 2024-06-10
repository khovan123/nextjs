export type IDealine = {
  id: string;
  title: string;
  description: string;
  time_start: Date;
  time_end: Date;
  status: "pending" | "processing" | "success" | "failed";
};
