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

export type IUser = {
  id: string;
  username: string;
  password: string;
  name: string;
  nickname: string;
  DoB: Date;
  sex: "male" | "female" | "unknow" | "other";
  phone: string;
  email: string;
  address: string;
  status: string;
  getting_day: Date;
};
//🤒 🌴
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
