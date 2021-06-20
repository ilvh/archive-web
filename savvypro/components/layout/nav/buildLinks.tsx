import { programs } from "../../../screens/programs/data";

export const coursesOfflineMenu = programs
  .filter(
    program =>
      program.getCourses().filter(course => course.types.includes("offline"))
        .length > 0
  )
  .map(program => {
    let courseLinks = program
      .getCourses()
      .filter(course => course.types.includes("offline"))
      .map(course => ({
        text: course.name,
        href: `/courses?id=${course.id}`,
        as: `/courses/${course.id}`
      }));
    return {
      text: program.name,
      href: `/program?id=${program.id}`,
      as: `/programs/${program.id}`,
      icon: program.icon,
      children: courseLinks.length > 1 ? courseLinks : undefined
    };
  });

export const coursesOnlineMenu = programs
  .filter(
    program =>
      program.getCourses().filter(course => course.types.includes("online"))
        .length > 0
  )
  .map(program => {
    let courseLinks = program
      .getCourses()
      .filter(course => course.types.includes("online"))
      .map(course => ({
        text: course.name,
        href: `/courses?id=${course.id}`,
        as: `/courses/${course.id}`
      }));

    // 2020 10月份的需求要求做链接的hard replace，但我觉得这个改动很不flexible
    if(program.id === 'CFA'){
      return {
        text: program.name,
        href: `/courses?id=CFA-Level-1`,
        as: `/courses/CFA-Level-1`,
        icon: program.icon,
        children: courseLinks.length > 1 ? courseLinks : undefined
      };
    } else if (program.id === 'SAS'){
      return {
        text: program.name,
        href: `/courses?id=SAS-Base-1`,
        as: `/courses/SAS-Base-1`,
        icon: program.icon,
        children: courseLinks.length > 1 ? courseLinks : undefined
      };
    } else if (program.id === 'Excel-VBA'){
      return {
        text: program.name,
        href: `/courses?id=Excel-VBA`,
        as: `/courses/Excel-VBA`,
        icon: program.icon,
        children: courseLinks.length > 1 ? courseLinks : undefined
      };
    }

    return {
      text: program.name,
      href: `/program?id=${program.id}`,
      as: `/programs/${program.id}`,
      icon: program.icon,
      children: courseLinks.length > 1 ? courseLinks : undefined
    };
  });
