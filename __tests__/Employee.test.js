const Employee = require("../lib/Employee");

test("tests Employee object", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("check for name from constructor", () => {
  const name = "Otis"
  const employee = new Employee(name);
  expect(employee.name).toBe(name)
});

test("check for id from constructor" , () => {
  const testId = 999;
  const employee = new Employee("Otis", testId);
  expect(employee.id).toBe(testId);
});

test("check for email from constructor", () => {
  const testMail = "mail@work.com";
  const employee = new Employee("Otis", 999, testMail);
  expect(employee.email).toBe(testMail);
});

test("does getName() work?", () => {
  const name = "Otis";
  const employee = new Employee(name);
  expect(employee.getName()).toBe(name)
});

test("does getId() work?", () => {
  const id = 999;
  const employee = new Employee("Otis", id);
  expect(employee.getId()).toBe(id);
});

test("does getEmail() work?", () => {
  const email = "mail@work.com";
  const employee = new Employee("Otis", 999, email);
  expect(employee.getEmail()).toBe(mail);
});

test("does getRole() return Employee?", () => {
  const role = "Employee";
  const employee = new Employee("Otis", 999, "mail@work.com");
  expect(employee.getRole()).toBe(role);
});



