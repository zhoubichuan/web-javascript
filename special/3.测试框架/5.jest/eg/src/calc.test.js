let calc = require("./calc");
test("devide", () => {
  expect(calc.devide(2, 1)).toBe(2);
  expect(calc.devide(2, 0)).toThrow();
});
