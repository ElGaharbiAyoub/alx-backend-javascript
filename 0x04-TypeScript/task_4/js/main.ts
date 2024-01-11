export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: 'ayoub',
  lastName: 'yew yew',
  experienceTeachingC: 10,
};

cpp.teacher = cTeacher;
console.log('c++: ', cpp.getRequirements());
console.log('c++: ', cpp.getAvailableTeacher());

java.teacher = cTeacher;
console.log('java: ', java.getRequirements());
console.log('java: ', java.getAvailableTeacher());

react.teacher = cTeacher;
console.log('react: ', react.getRequirements());
console.log('react: ', react.getAvailableTeacher());
