export type IDeadline = {
  id: string;
  title: string;
  description: string;
  time_start: Date;
  time_end: Date;
  status: "pending" | "processing" | "success" | "failed";
};

export type IDeadlineGroup = {
  name: string;
  data: IDeadline[];
};

export interface IDeadlineForm {
  data: {
    title: string;
    description: string;
    time_start: Date;
    time_end: Date;
    status: string;
  };
  onClose: () => void;
}
