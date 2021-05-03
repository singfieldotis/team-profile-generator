const Engineer = require("../lib/Engineer");

test("creates Engineer object", () => {
  const engineer = new Engineer("Otis");
  expect(engineer.name).toBe("Otis");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.stringContaining("@"));
  expect(engineer.getRole()).toEqual("Engineer")
})