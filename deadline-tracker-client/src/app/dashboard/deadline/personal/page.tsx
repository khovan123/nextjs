import { IDealine } from "@/components/interfaces/data";
import DeadlineTable from "@/components/modules/table/data-table";
const deadlineItems: IDealine[] = [
  {
    id: "728ed52f",
    title: "Build my PC",
    description: "Build my PC with 2500$",
    time_start: new Date("06/09/2024"),
    time_end: new Date("07/07/2024"),
    status: "pending",
  },
  {
    id: "489e1d42",
    title: "Complete course JAVA",
    description: "Some thing can read here!",
    time_start: new Date("06/09/2024"),
    time_end: new Date("06/20/2024"),
    status: "processing",
  },
  {
    id: "489e13d42",
    title: "Complete course HTML",
    description: "Some thing can read here!",
    time_start: new Date("06/09/2024"),
    time_end: new Date("09/10/2024"),
    status: "pending",
  },
  {
    id: "489e21d42",
    title: "Complete course CSS",
    description: "Some thing can read here!",
    time_start: new Date("06/09/2024"),
    time_end: new Date("06/07/2024"),
    status: "processing",
  },
  {
    id: "4891e1d42",
    title: "Complete course Bootstrap",
    description: "Some thing can read here!",
    time_start: new Date("06/09/2024"),
    time_end: new Date("10/10/2024"),
    status: "success",
  },
];

export default async function PersonalDeadlinePage() {
  return (
    <div className="container mx-auto p-4">
      <DeadlineTable data={deadlineItems} />
    </div>
  );
}
