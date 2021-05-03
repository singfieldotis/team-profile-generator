const Engineer = require("../lib/Engineer");

test("is there GitHub?", () => {
  const user = "singfieldotis";
  const engineer = new Engineer("Otis", 999, "mail@work.com", user);
  expect(engineer.github).toBe(user);
});

test("did getRole() return Engineer?", () => {
  const role = "Engineer";
  const engineer = new Engineer("Otis", 999, "mail@work.com", "singfieldotis");
  expect(engineer.getRole()).toBe(role);
});

test("Did getGitHub() work?", () => {
  const user = "singfieldotis";
  const engineer = new Engineer("Otis", 999, "work@mail.com", user);
  expect(engineer.getGithub()).toBe(user);
});
  