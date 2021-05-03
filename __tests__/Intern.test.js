const Intern = require("../lib/Intern");

test("Does constructor provide school?", () => {
  const school = "USF";
  const intern = new Intern("Otis", 999, "work@mail.com", school);
  expect(intern.school).toBe(school);
});

test("Does getRole() return Intern?", () => {
  const role = "Intern";
  const intern = new Intern("Otis", 999, "work@mail.com", "USF");
  expect(intern.getRole()).toBe(role);
});

test("Does getSchool() work?", () => {
  const school = "USF";
  const intern = new Intern("Otis", 999, "work@mail.com", school);
  expect(intern.getSchool()).toBe(school);
});