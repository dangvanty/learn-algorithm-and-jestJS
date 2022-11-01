const { cau1, cau2 } = require("./test1")

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
  expect(cau1(a)).toBe(17)
  expect(cau1(b)).toBe(19)
})

test("Câu 2 nhập số nguyên trả lại một mảng theo điều kiện", () => {
  expect(cau2(15)).toEqual([
    1,
    2,
    "fix",
    4,
    "bug",
    "fix",
    7,
    8,
    "fix",
    "bug",
    11,
    "fix",
    13,
    14,
    "fixbug",
  ])
})

describe.each([
  {
    a: [
      [7, 1, 3],
      [2, 8, 7],
      [1, 9, 5],
    ],
    expected: 17,
  },
  {
    a: [
      [7, 1, 3],
      [2, 8, 9],
      [1, 9, 5],
    ],
    expected: 19,
  },
])(".richest($a)", ({ a, expected }) => {
  test(`returns ${expected}`, () => {
    expect(cau1(a)).toBe(expected)
  })

  test(`returned value not be greater than ${expected}`, () => {
    expect(cau1(a)).not.toBeGreaterThan(expected)
  })

  test(`returned value not be less than ${expected}`, () => {
    expect(cau1(a)).not.toBeLessThan(expected)
  })
})
