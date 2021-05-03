const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee")

test("Does constructor give office number?", () => {
  const officeNum = 108;
  const manager = new Manager("Otis", 999, "mail@work.com", officeNum);
  expect(manager.officeNumber).toBe(officeNum);
});

test("Does getRole() return Manager?", () => {
  const role = "Manager";
  const manager = new Manager("Otis", 999, "mail@work.com", 108);
  expect(manager.getRole()).toBe(role);
})

test("Does getOffice() work?", () => {
  const office = 108;
  const manager = new Manager("Otis", 999, "mail@work.com", office);
  expect(manager.getOfficeNumber()).toBe(office);
});