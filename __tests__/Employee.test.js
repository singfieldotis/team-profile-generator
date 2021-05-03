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
  const testId = 
})



