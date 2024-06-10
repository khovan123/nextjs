import { IDeadlineGroup } from "@/components/interfaces/data";
import DeadlineTable from "@/components/modules/table/DeadlineTable";
import { getStatus } from "@/utils/Helper/remainingTime";

const data: IDeadlineGroup[] = [
  {
    name: "Coding",
    data: [
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
    ],
  },
  {
    name: "Math",
    data: [
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
    ],
  },
];

export default function PersonalDeadlinePage() {
  return (
    <div className="flex flex-col gap-10 pb-4">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full h-full text-center flex flex-col bg-slate-800 p-4 rounded-md"
          >
            <h1 className="uppercase text-gray-200 font-semibold text-2xl mb-3 before:content-normal before:w-40 before:border-b-2 relative before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:border-gray-500 before:rounded-full">
              {item.name}
            </h1>
            <DeadlineTable data={item.data} />
          </div>
        );
      })}
    </div>
  );
}
