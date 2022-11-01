const { wealth } = require("./test1")

test("Câu 1: tiền người giàu nhất", () => {
  const a = [
    [7, 1, 3],
    [2, 8, 7],
    [1, 9, 5],
  ]
  const b = [
    [7, 1, 3],
    [2, 8, 9],
    [1, 9, 5],
  ]
  expect(wealth(a)).toBe(17)
  expect(wealth(b)).toBe(19)
})

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3)
})
