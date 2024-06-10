import { IDeadline } from "@/components/interfaces/data";
import DeadlineTable from "@/components/modules/table/DeadlineTable";
import { getStatus } from "@/utils/Helper/remainingTime";
const data: IDeadline[] = [
  {
    id: "728ed52f",
    title: "Build my PC",
    description: "Build my PC with 2500$",
    time_start: new Date("06/09/2024"),
    time_end: new Date("07/07/2024"),
    status: getStatus(new Date("06/09/2024"), new Date("07/07/2024")),
  },
  {
    id: "489e1d42",
    title: "Complete course JAVA",
    description: "Some thing can read here!",
    time_start: new Date("06/15/2024"),
    time_end: new Date("06/20/2024"),
    status: getStatus(new Date("06/15/2024"), new Date("06/20/2024")),
  },
  {
    id: "489e13d42",
    title: "Complete course HTML",
    description: "Some thing can read here!",
    time_start: new Date("06/09/2024"),
    time_end: new Date("09/10/2024"),
    status: getStatus(new Date("06/09/2024"), new Date("09/10/2024")),
  },
  {
    id: "489e21d42",
    title: "Complete course CSS",
    description: "Some thing can read here!",
    time_start: new Date("06/09/2024"),
    time_end: new Date("06/07/2024"),
    status: getStatus(new Date("06/09/2024"), new Date("06/07/2024")),
  },
  {
    id: "4891e1d42",
    title: "Complete course Bootstrap",
    description: "Some thing can read here!",
    time_start: new Date("06/09/2024"),
    time_end: new Date("10/10/2024"),
    status: getStatus(new Date("06/09/2024"), new Date("10/10/2024")),
  },
];
export default function PersonalDeadlinePage() {
  return (
    <div className="bg-slate-800 p-4 rounded-md h-full">
      <DeadlineTable data={data} />
    </div>
  );
}
