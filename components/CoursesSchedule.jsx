import Democlass from "./Democlass";
const CoursesSchedule = () => {
  const data = [
    {
      day: "Sunday",
      courseName: "Web Course",
      Time: "8:00 PM",
      courseTeacher: "Xefer(MERN Developer)",
    },
    {
      day: "Sunday",
      courseName: "Web Course",
      Time: "8:00 PM",
      courseTeacher: "Xefer(MERN Developer)",
    },
    {
      day: "Sunday",
      courseName: "Web Course",
      Time: "8:00 PM",
      courseTeacher: "Xefer(MERN Developer)",
    },
    {
      day: "Sunday",
      courseName: "Web Course",
      Time: "8:00 PM",
      courseTeacher: "Xefer(MERN Developer)",
    },
    {
      day: "Sunday",
      courseName: "Web Course",
      Time: "8:00 PM",
      courseTeacher: "Xefer(MERN Developer)",
    },
    {
      day: "Sunday",
      courseName: "Web Course",
      Time: "8:00 PM",
      courseTeacher: "Xefer(MERN Developer)",
    },
    {
      day: "Sunday",
      courseName: "Web Course",
      Time: "8:00 PM",
      courseTeacher: "Xefer(MERN Developer)",
    },
    {
      day: "Sunday",
      courseName: "Web Course",
      Time: "8:00 PM",
      courseTeacher: "Xefer(MERN Developer)",
    },
  ];
  return (
    <>
    <Democlass/>
    <div className="flex flex-col place-items-center">
      <div className="-m-1.5 ">
        <div className="p-1.5 w-[50rem] inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase"
                  >
                    Days
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase"
                  >
                    Course Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-white uppercase"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-bold text-white uppercase"
                  >
                    Course Teacher
                  </th>
                </tr>
              </thead>
              <caption className="text-white font-bold text-4xl">Regular  Class schedule</caption>
              <tbody className="divide-y di divide-gray-200 ">
               

               
                
               {data.map((curElem, index) => {
                  return (
                    <>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {curElem.day}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {curElem.courseName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {curElem.Time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-200">
                          {curElem.courseTeacher}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-blue-600">
                          confirm
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CoursesSchedule;
