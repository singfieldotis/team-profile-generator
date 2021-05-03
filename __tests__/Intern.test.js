const Intern = require("../lib/Intern");

test("creates Intern object", () => {
  const intern = new Intern("Otis");

  expect(intern.name).toBe("Otis");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.stringContaining("@"));
  expect(intern.getName()).toEqual(
    expect.stringContaining(intern.name));
  expect(intern.getId()).toEqual(
    expect.stringContaining(intern.id.toString()));
  expect(intern.getEmail().toEqual(
    expect.stringContaining(intern.email)));
    expect(intern.getSchool().toEqual(
      expect.stringContaining(intern.school)));
  expect(intern.getRole()).toEqual("Intern")
})