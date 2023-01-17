import { add } from './add'

describe('sum module', () => {
  test('add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
  })
})
