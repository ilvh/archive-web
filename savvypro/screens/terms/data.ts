import { CourseIDS } from "./../courses/data";

export class Term {
  constructor(
    public year: string,
    public termName: "Winter" | "Fall",
    public courses: {
      courseId: CourseIDS;
      examDate: Date;
      schedules: { startTime: Date; endTime: Date }[];
    }[]
  ) {}
}

// const terms: Term[] = [
//   new Term("2019", "Winter", [
//     {
//       courseId: "CFA-Level-1",
//       examDate: new Date("June 12, 2017")
//     }
//   ])
// ];
