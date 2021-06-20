import {
  program as ExcelProgram,
  courses as Excelcourses
} from "./programs/excel-vba";
import { program as CFAProgram, courses as CFACourses } from "./programs/cfa";
export interface Program {
  name: string;
  courses: string[];
}

export interface Course {
  types: ("offline" | "online")[];
  name: string;
}

const programs: Program[] = [ExcelProgram, CFAProgram];

const courses: Course[] = [...Excelcourses, ...CFACourses];

function verifyCoursesExist() {
  let courseNames = courses.map(x => x.name);
  for (let program of programs) {
    program.courses.forEach(elem => {
      if (courseNames.indexOf(elem) === -1) {
        throw Error(
          `In program "${
            program.name
          }", course "${elem}" does not exist in course registrar`
        );
      }
    });
  }
}
verifyCoursesExist();

export { courses, programs };
