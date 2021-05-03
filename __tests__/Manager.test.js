const Manager = require("../lib/Manager.js");

test("creates Manager object", () => {
  const manager = new Manager("Otis");

  expect(manager.name).toBe("Otis");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringContaining("@"));
  expect(manager.getName()).toEqual(
    expect.stringContaining(manager.name));
  expect(manager.getId()).toEqual(
    expect.stringContaining(manager.id.toString()));
  expect(manager.getEmail().toEqual(
    expect.stringContaining(manager.email)));
  expect(manager.getRole()).toEqual("Manager")
})